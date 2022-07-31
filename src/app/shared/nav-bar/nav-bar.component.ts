import { Component, Input, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() isLoggedIn: any;
  @Input() tag: any;
  title="BombSquad";
  isShowing: boolean = false;

  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.tag = user.tag;
  }


  toggleSidenav() {
   this.isShowing = !this.isShowing;
   }

   signout(){
    this.tokenStorage.signOut();
    location.reload();
   }
}
