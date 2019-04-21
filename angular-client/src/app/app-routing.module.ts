import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Ambition} from "./ambition/ambition.component";
import {Economics} from "./economics/economics.component";
import {Home} from "./home/home.component";
import {Crowdfunding} from "./crowdfunding/crowdfunding.component";
import {Disclaimer} from "./disclaimer/disclaimer.component";

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
  //EXAMPLE OF USING CHILDREN ROUTES
  // { path: 'user', children: [
  //     { path: 'list', component: UserListComponent}
  //   ]}
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
