import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  title="BombSquad";
  isShowing: boolean = false;
  constructor() { }
  
  ngOnInit(): void {
  }
  

   toggleSidenav() {
   this.isShowing = !this.isShowing;
   }
}
