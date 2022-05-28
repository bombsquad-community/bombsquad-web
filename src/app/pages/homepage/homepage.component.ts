import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { filter, map, mergeMap } from 'rxjs';
import { SEOServiceService } from 'src/app/services/seoservice.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = ["/assets/img/bs-bg-1.jpg","/assets/img/bs-bg-2.jpg"];
  constructor(config: NgbCarouselConfig,private router:Router ,private activatedRoute:ActivatedRoute,private _seoService: SEOServiceService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  ngOnInit(): void {

        var rt = this.getChild(this.activatedRoute)

        rt.data.subscribe((data: any) => {
          console.log(data);
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
