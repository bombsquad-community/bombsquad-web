import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DownloadsComponent } from './pages/downloads/downloads.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { ModComponent } from './pages/mod/mod.component';
import { ModsComponent } from './pages/mods/mods.component';
import { ServersComponent } from './pages/servers/servers.component';

const routes: Routes = [
  {
    path:'home',
    component:HomepageComponent,
    data:{
      title:'Home',
      description:"8 players party game madness , downlaod now",
      ogUrl:'https://bombsquad.ga'
    }
  },
  {
    path:'mods',
    component:ModsComponent,
    data:{
      title:'Download Mods',
      description:"Download Community Mods, Plugins all at one place",
      ogUrl:'https://bombsquad.ga/mods'
    }
  },
  {path:'mods/:modId',component:ModComponent},
  {
    path:'download',
    component:DownloadsComponent,
    data:{
      title:'Download',
      description:"Download BombSquad Game , Remote, VR, Server Builds",
      ogUrl:'https://bombsquad.ga/download'
    }
   },
   {
    path:'servers',
    component:ServersComponent,
    data:{
      title:'Public Servers',
      description:"BombSquad Public Servers List",
      ogUrl:'https://bombsquad.ga/servers'
    }
  },
  {
    path:'login',
    component:LoginComponent,
    data:{
      title:'Login BombSquad Account',
      description:"BombSquad Account login page",
      ogUrl:'https://bombsquad.ga/login'
    }
  },
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})

export class AppRoutingModule { }
