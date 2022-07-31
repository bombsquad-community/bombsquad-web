import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';

declare const gtag:Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ballistica-web';
  isLoggedIn = false;
  subscription:any;
  tag?:string;
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private tokenStorage:TokenStorageService) {
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
  ngOnInit():void {
    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.tag = user.tag;
    }

    this.subscription = this.tokenStorage.loginEvent.subscribe(()=>{
      const user = this.tokenStorage.getUser();
      this.isLoggedIn = !!this.tokenStorage.getToken();
    });
   this.tokenStorage.newUserLogin.subscribe(()=>{
      const user = this.tokenStorage.getUser();
      this.isLoggedIn = !!this.tokenStorage.getToken();
    });
  }
}
