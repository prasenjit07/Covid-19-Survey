import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAddComponent } from './home/home-add.component';
import { HomeDetailsComponent } from './home/home-details.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "home/:id", component: HomeDetailsComponent},
  { path: "home/:id/add", component: HomeAddComponent },
  { path: "", pathMatch: "full", redirectTo: "home"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
