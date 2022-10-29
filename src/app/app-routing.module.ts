import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:() => import ('./pages/homepage/homepage.component').then(m => m.HomepageModule),
    data:{
      title:'BombSquad Community Site | BCS',
      description:"Welcome to BombSquad Community Website, find plugins, servers & account details, downloads links and tools.",
      ogUrl:'https://bombsquad.ga'
    }
  },
  {
    path:'mods',
    loadChildren:() => import ('./pages/mods/mods.component').then(m => m.ModsModule),

    data:{
      title:'Download Latest BombSquad Mods',
      description:"Download Community Mods, Plugins for all version of BombSquad and install them directly to workspace.",
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
      title:'Download BombSquad Game',
      description:"Download Latest version of BombSquad Game, Remote, VR, Server Builds for Windows 11, Android, Linux, Macbook",
      ogUrl:'https://bombsquad.ga/download'
    }
   },
   {
    path:'servers',
    loadChildren:() => import ('./pages/servers/servers.component').then(m => m.ServersModule),
    data:{
      title:'BombSquad Public Server List',
      description:"BombSquad Public Servers List, find queue Id, IP address of all public servers ever hosted for bombsquad.",
      ogUrl:'https://bombsquad.ga/servers'
    }
  },
  {
    path:'players',
    loadChildren:() => import ('./pages/players/players.component').then(m => m.PlayersModule),
    data:{
      title:'BombSquad Players Account',
      description:"Search BombSquad Player Account Details, pb-id, Device accounts",
      ogUrl:'https://bombsquad.ga/players'
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
      title:'BombSquad Community Plugin Manager',
      description:"One click to install mods for bombsquad, biggest collection of plugins/mods available for bombsquad",
      ogUrl:'https://bombsquad.ga/pluginmanager'
    }
  },
  {
    path:'support',
    loadChildren:() => import ('./pages/custompage/support/support').then(m => m.SupportModule),

    data:{
      title:'Donate BombSquad Community',
      description:"Support US !",
      ogUrl:'https://bombsquad.ga/support'
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
