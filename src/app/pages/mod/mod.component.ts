import { Component, Inject, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ModsService } from 'src/app/services/mods.service';
import { SEOServiceService } from 'src/app/services/seoservice.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { WorkspaceService } from 'src/app/services/workspace.service';

import {MatSnackBar, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select'
import {MatChipsModule} from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent implements OnInit {

  constructor(private modsService:ModsService,private activatedRoute:ActivatedRoute,private _seoService:SEOServiceService,private router:Router,public dialog: MatDialog, private tokenStorage:TokenStorageService) { }

  mod:any;
  isLoggedIn = false;
  videos:string[]=[];
  scripts:string[]=[];
  images:string[]=[];
  ngOnInit(): void {
    var modId=this.activatedRoute.snapshot.paramMap.get('modId');
    this.loadData(modId);
    if(this.tokenStorage.getToken()) this.isLoggedIn = true;
  }

  loadData(modId:any) {
    this.modsService.getMods(1,0,modId).subscribe((data:any)=>{
      this.mod=data;

        var title="unknown.mod"
        for(var attach of this.mod[0].attachments ){
          if(attach.endsWith(".py") || attach.endsWith(".zip") || attach.endsWith(".rar")){
            title = attach.split('/').pop()
            this.scripts.push(attach);
          }
          else if(attach.endsWith(".mp4")){
            this.videos.push(attach);
          }
          else if(attach.endsWith(".jpg")||attach.endsWith(".png")||attach.endsWith(".jpeg")||attach.endsWith(".gif")) {
            this.images.push(attach);
          }
        }

        this.mod[0].title=title;
        this.updateMeta(this.mod[0])
    })
  }

  updateMeta(meta:any){
        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {

          this._seoService.updateTitle(meta.title);
          this._seoService.updateOgUrl("https://bombsquad.ga");
          //Updating Description tag dynamically with title
          this._seoService.updateDescription(meta.description)
        });
  }

  getChild(activatedRoute: ActivatedRoute):any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  openVerticallyCentered(fileUrl: String) {
    const dialogRef = this.dialog.open(ModDialog, {
      data : { file:fileUrl ,loggedIn:this.isLoggedIn}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'mod-dialog.component',
  templateUrl: 'mod-dialog.component.html',
})
export class ModDialog{
  public file : any;
  selected = "";
  workspaces:any;
  loggedIn:boolean;
  validFile=false;
  haveWorkspace:boolean = false;
  constructor(@Inject(MAT_DIALOG_DATA) data : {file : String, loggedIn:boolean}, private workspace:WorkspaceService, private snackBar: MatSnackBar) {

    this.file = data.file;
    this.loggedIn = data.loggedIn;
    this.workspaces = workspace.getWorkspaceList();
    this.selected = this.workspaces[0];
    if(this.selected!="(no workspaces)"){
      this.haveWorkspace=true;
    }
    if(this.file.endsWith(".py"))
     this.validFile=true;

  }
  config: MatSnackBarConfig = {
    duration: 5000
  }

  download() {
    window.open(this.file,"_self");
    this.snackBar.open("Downloading Started",'',this.config)
  }

  install() {
    this.snackBar.open(`Installing mod ${this.file.split("/").pop()} to workspace ${this.selected}`,'',this.config)
    this.installMod(0);
  }
  installMod(retry:number) {
    this.workspace.installModToWorkspace(this.file,this.selected,).subscribe(response =>{
        if(response.status==200) {
          this.snackBar.open(`Installation done for ${this.file.split("/").pop()}`,'',this.config)
        }
    },(error)=> {
      if(retry>=3){
        this.snackBar.open(`Installation FAILED  :( `,'',this.config)
      }else this.installMod(retry+1)
    })
  }

}


const routes: Routes = [{path: '', component: ModComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatChipsModule
    ],
  exports: [ModComponent, ModDialog],
  declarations: [ModComponent, ModDialog],
  providers: []
})
export class ModPageModule {
}
