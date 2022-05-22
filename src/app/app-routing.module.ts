import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ModComponent } from './pages/mod/mod.component';
import { ModsComponent } from './pages/mods/mods.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'mods',component:ModsComponent},
  {path:'mods/:modId',component:ModComponent},
  {path:'**',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
