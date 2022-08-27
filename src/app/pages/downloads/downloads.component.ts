import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule, Routes } from '@angular/router';
import { SEOServiceService } from 'src/app/services/seoservice.service';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.scss']
})
export class DownloadsComponent implements OnInit {

  constructor(private _seoService:SEOServiceService,private activatedRoute:ActivatedRoute) { }

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

const routes: Routes = [{path: '', component: DownloadsComponent}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
    ],
  exports: [DownloadsComponent],
  declarations: [DownloadsComponent],
  providers: []
})
export class DownloadModule {
}
