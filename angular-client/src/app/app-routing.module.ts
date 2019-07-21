import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Ambition} from "./ambition/ambition.component";
import {Economics} from "./economics/economics.component";
import {Home} from "./home/home.component";
import {Crowdfunding} from "./crowdfunding/crowdfunding.component";
import {Disclaimer} from "./disclaimer/disclaimer.component";
import {Certifications} from "./certifications/certifications.component";
import {ProjectAppraisal} from "./projectAppraisal/projectappraisal.component";

const routes: Routes = [
  {path: 'home', component: Home},
  {path: 'ambition', component: Ambition},
  {
    path: 'economics', component: Economics,
    children: [
      {path: 'crowdfunding', component: Crowdfunding}
    ]
  },
  {path: 'disclaimer', component: Disclaimer},
  {path: 'certifications', component: Certifications},
  {path: 'projectAppraisal', component: ProjectAppraisal},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
