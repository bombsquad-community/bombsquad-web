import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostListener, NgModule, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { SEOServiceService } from 'src/app/services/seoservice.service';

import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomepageComponent implements OnInit,OnDestroy {
  isScrolled:boolean | undefined = false;
  imageLoded:number=0;
  listener;
  constructor(private router:Router ,private activatedRoute:ActivatedRoute,private _seoService: SEOServiceService, private renderer2: Renderer2, private changeDetectorRef: ChangeDetectorRef) {
    // customize default values of carousels used by this component tree
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
    this.imageLoded++;
  }

  onScroll() {
    this.isScrolled= true;
    this.changeDetectorRef.detectChanges();
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
    FlexLayoutModule,
    ],
  exports: [HomepageComponent],
  declarations: [HomepageComponent],
  providers: []
})
export class HomepageModule {
}
