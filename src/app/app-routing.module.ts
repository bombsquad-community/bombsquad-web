import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import ('./pages/homepage/homepage.component').then(m => m.HomepageModule),
    data:{
      title:'Home',
      description:"8 players party game madness , downlaod now",
      ogUrl:'https://bombsquad.ga'
    }
  },
  {
    path:'mods',
    loadChildren:() => import ('./pages/mods/mods.component').then(m => m.ModsModule),

    data:{
      title:'Download Mods',
      description:"Download Community Mods, Plugins all at one place",
      ogUrl:'https://bombsquad.ga/mods'
    }
  },
  {path:'mods/:modId',
  loadChildren:() => import ('./pages/mod/mod.component').then(m => m.ModPageModule),

  },
  {
    path:'download',
    loadChildren:() => import ('./pages/downloads/downloads.component').then(m => m.DownloadModule),
    data:{
      title:'Download',
      description:"Download BombSquad Game , Remote, VR, Server Builds",
      ogUrl:'https://bombsquad.ga/download'
    }
   },
   {
    path:'servers',
    loadChildren:() => import ('./pages/servers/servers.component').then(m => m.ServersModule),
    data:{
      title:'Public Servers',
      description:"BombSquad Public Servers List",
      ogUrl:'https://bombsquad.ga/servers'
    }
  },
  {
    path:'login',
    loadChildren:() => import ('./pages/login/login.component').then(m => m.LoginModule),
    data:{
      title:'Login BombSquad Account',
      description:"BombSquad Account login page",
      ogUrl:'https://bombsquad.ga/login'
    }
  },
  {
    path:'pluginmanager',
    loadChildren:() => import ('./pages/custompage/pluginmanager/pluginmanager').then(m => m.PluginManagerModule),

    data:{
      title:'BombSquad Plugin Manager',
      description:"One click to install mods for bombsquad, biggest collection of plugins/mods available for bombsquad",
      ogUrl:'https://bombsquad.ga/pluginmanager'
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
