import { ChangeDetectionStrategy, Component, HostListener, NgModule, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { SEOServiceService } from 'src/app/services/seoservice.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { fromEvent, Subject } from 'rxjs';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit,OnDestroy {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  isScrolled = false;
  images=["/assets/img/bs-bg-1.webp","/assets/img/bs-bg-2.webp"];
  //images = ["/assets/img/bs-bg-1.webp","/assets/img/bs-bg-2.webp"];
  imageLoded:number=0;
  listener;
  constructor(config: NgbCarouselConfig,private router:Router ,private activatedRoute:ActivatedRoute,private _seoService: SEOServiceService, private renderer2: Renderer2) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
    this.listener = this.renderer2.listen('window', 'scroll', (e) => {
     this.onScroll();
    });
  }
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
  onload() {
    console.log("image loded")
    this.imageLoded++;
  }

  onScroll() {
    console.log("scrolled")
    this.isScrolled= true;
    this.images = ["/assets/img/bs-bg-1.webp","/assets/img/bs-bg-2.webp"];
  }

  ngOnDestroy(): void {
    this.listener();
  }

}

const routes: Routes = [{path: '', component: HomepageComponent}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule,
    FlexLayoutModule,
    ],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule {
}
