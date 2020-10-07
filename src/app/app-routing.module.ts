import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'whiteboard',
    pathMatch : 'full' 
  },
  {
    path : 'whiteboard',
    loadChildren : ()=>import('./layout/layout.module').then(mod => mod.LayoutModule)  },
  {
    path : 'login',
   loadChildren : ()=>import('./auth/auth.module').then(mod => mod.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
