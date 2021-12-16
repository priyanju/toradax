import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRoute } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';   
import { NetComponent } from './net/net.component';

  const routes: Routes = [
    { path: 'dashboard/:ip', component: DashboardComponent},
    // { path: '**', component: DashboardComponent },
    {
      path:'net/:ip',component:NetComponent
    }
  ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
