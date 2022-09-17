import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";
import { SEOServiceService } from "src/app/services/seoservice.service";
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-pluginmanager',
  templateUrl: './pluginmanager.html',
  styleUrls: ['./pluginmanager.scss']
})
export class PluginManager implements OnInit {
  downloadLink = "https://raw.githubusercontent.com/bombsquad-community/plugin-manager/main/plugin_manager.py";
  constructor(private http:HttpClient ,private _seoService:SEOServiceService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    var rt = this.getChild(this.activatedRoute)

    rt.data.subscribe((data: any) => {

          this._seoService.updateTitle(data.title);
          this._seoService.updateOgUrl(data.ogUrl);
          //Updating Description tag dynamically with title
          this._seoService.updateDescription(data.description)
        });
  }
  getChild(activatedRoute: ActivatedRoute):any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  onDownload() {
    this.http.get( this.downloadLink , {responseType:'blob'})
        .subscribe((res)=>{
          var a = document.createElement("a");
          a.href = URL.createObjectURL(res);
          a.download = "plugin_manager.py";
          // start download
          a.click();
        })
  }

}

const routes: Routes = [{path: '', component: PluginManager}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule
    ],
  exports: [PluginManager],
  declarations: [PluginManager],
  providers: []
})
export class PluginManagerModule {
}
