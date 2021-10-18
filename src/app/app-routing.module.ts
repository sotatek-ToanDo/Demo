import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './home-pages/home-pages.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {path:'', component: HomePagesComponent},
    ]
  },
  {
    path: 'home-pages',
    children:[
      {path:'', component: HomePagesComponent},
    ]
  },
  {
    path:'**',
    redirectTo:'/',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
export const routing = RouterModule.forRoot(routes);
