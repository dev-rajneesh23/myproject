import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuard } from './service/auth/auth.guard';
const routes: Routes = [
  {path:"", loadChildren:()=>import('./auth/login/login.module').then((m)=>m.LoginModule)},
  {path:"home",canActivate:[AuthGuard] ,loadChildren:()=>import('./pages/home/home.module').then((m)=>m.HomeModule)},
  {path:"contect",canActivate:[AuthGuard], loadChildren:()=>import('./pages/contect/contect.module').then((m)=>m.ContectModule)},
  {path:"about",canActivate:[AuthGuard], loadChildren:()=>import('./pages/about/about.module').then((m)=>m.AboutModule)},
  {path:"address",canActivate:[AuthGuard], loadChildren:()=>import('./pages/address/address.module').then((m)=>m.AddressModule)},
  {path:"table",canActivate:[AuthGuard], loadChildren:()=>import('./pages/addresstable/addresstable.module').then((m)=>m.AddresstableModule)},

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
