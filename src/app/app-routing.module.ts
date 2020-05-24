import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WallComponent } from './wall/wall.component';
import { AuthGuard } from './shared/auth.guard';
import { DashboardGuard } from './dashboard/dashboard.guard';


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard', component: DashboardComponent, canActivate: [DashboardGuard], canActivateChild: [DashboardGuard], children: [
      { path: '', component: WallComponent },
    ]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
