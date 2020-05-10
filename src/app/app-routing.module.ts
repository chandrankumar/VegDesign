import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: '', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }
  ,
  { 
    path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }
,
  { 
    path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) 
  }
  ,
  { 
    path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) 
  }
  ,
  { 
    path: 'products', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }