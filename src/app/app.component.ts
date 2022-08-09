import { Component } from '@angular/core';
import { ActivatedRoute, Event, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
import { WorkspaceService } from './services/workspace.service';

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
  constructor(private router: Router, private activatedRoute:ActivatedRoute, private tokenStorage:TokenStorageService, private workspace:WorkspaceService) {
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
  private tokenExpired(token:any) {
    const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
  }

  ngOnInit():void {

    let token = this.tokenStorage.getToken();
    if(token && this.tokenExpired(token)) {
        this.tokenStorage.signOut();
    }
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
