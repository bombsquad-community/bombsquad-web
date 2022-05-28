import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { ModsService } from 'src/app/services/mods.service';
import { SEOServiceService } from 'src/app/services/seoservice.service';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent implements OnInit {

  constructor(private modsService:ModsService,private activatedRoute:ActivatedRoute,private _seoService:SEOServiceService,private router:Router) { }

  mod:any;

  ngOnInit(): void {
    var modId=this.activatedRoute.snapshot.paramMap.get('modId');
    this.loadData(modId);

  }

  loadData(modId:any){
    this.modsService.getMods(1,0,modId).subscribe(data=>{
      this.mod=data;

        var title="unknown.mod"
        for(var attach of this.mod[0].attachments ){
          if(attach.endsWith(".py")){
            title = attach.split('/').pop()
          }
        }
        console.log(this.mod[0].description)
        this.mod[0].title=title;
        this.updateMeta(this.mod[0])
    })
  }

  updateMeta(meta:any){
        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {
          console.log(data);
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
}
