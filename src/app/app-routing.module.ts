import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAddComponent } from './home/home-add.component';
import { HomeDetailsComponent } from './home/home-details.component';
import { HomeComponent } from './home/home.component';
import { HomeAddGuard } from './home/home-add.guard'
import { HomeThreatComponent } from './home/home-threat.component';


const routes: Routes = [
  {
    path: "home",
    children:[
      { path: "", component: HomeComponent },
      { path: "threat", component: HomeThreatComponent},
      { path: ":id", component: HomeDetailsComponent },
      { path: ":id/add", component: HomeAddComponent, canDeactivate: [HomeAddGuard] },  
    ]
  },
  { path: "", pathMatch: "full", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
