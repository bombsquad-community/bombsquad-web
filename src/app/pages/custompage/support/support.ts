import { Component, NgModule, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Routes } from "@angular/router";
import { SEOServiceService } from "src/app/services/seoservice.service";
import {MatButtonModule} from '@angular/material/button';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-support',
  templateUrl: './support.html',
  styleUrls: ['./support.scss']
})
export class Support implements OnInit {
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
}

const routes: Routes = [{path: '', component: Support}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule
    ],
  exports: [Support],
  declarations: [Support],
  providers: []
})
export class SupportModule {
}
