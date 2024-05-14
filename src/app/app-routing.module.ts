import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountInfoComponent } from './pages/account-info.component';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './pages/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'account',
    component: AccountInfoComponent
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}