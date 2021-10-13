import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

const routes: Routes = [

  /*{ path: '/information', component: InformationComponent }*/


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
