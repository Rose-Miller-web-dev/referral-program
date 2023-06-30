import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ReferralComponent } from './referral/referral.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'referral', component: ReferralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
