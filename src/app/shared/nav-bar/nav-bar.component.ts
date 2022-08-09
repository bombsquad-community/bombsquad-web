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

  public isMenuCollapsed = true;
  constructor(private tokenStorage:TokenStorageService) { }

  ngOnInit(): void {
    const user = this.tokenStorage.getUser();
    this.tag = user.tag;
  }

  signout(){
    this.tokenStorage.signOut();
    location.reload();
   }
}
