import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

declare const gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ballistica-web';
  constructor(private router: Router, private activatedRoute:ActivatedRoute) {
    this.router.events.pipe(
      filter((event:Event) => event instanceof NavigationEnd)
    ).subscribe((event) => {
      /** START : Code to Track Page View  */
      gtag('event', 'page_view', {
          page_path: this.router.url
      })
      /** END */
    })
  }
}
