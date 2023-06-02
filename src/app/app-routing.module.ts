import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'products',
    loadChildren: () =>
      import('remoteapp1/ProductsModule').then(m => m.ProductsModule)
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('remoteapp2/ProfileModule').then(m => m.ProfileModule)
  },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
