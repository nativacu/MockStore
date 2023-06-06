import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';

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
  {
    path: 'profile-v14',
    component: WebComponentWrapper,
    data: {
      // remoteEntry: "http://localhost:4204/remoteEntry.js",
        remoteEntry: 'https://scintillating-madeleine-31e054.netlify.app/remoteEntry.js',
        remoteName: 'remoteapp3',
        exposedModule: './web-components',

        elementName: 'profile-v14'
    } as WebComponentWrapperOptions
  },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
