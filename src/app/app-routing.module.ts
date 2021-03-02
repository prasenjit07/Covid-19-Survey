import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAddComponent } from './home/home-add.component';

const routes: Routes = [
  { path: "home-add", component: HomeAddComponent },
  { path: "", pathMatch: "full", redirectTo: "home-add"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
