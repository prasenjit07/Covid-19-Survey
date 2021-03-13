import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeAddComponent } from './home-add.component';
import { HomeComponent } from './home.component';
import { HomeDetailsComponent } from './home-details.component';
import { HomeThreatComponent } from './home-threat.component';
import { HomeAddGuard } from './home-add.guard';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeData } from './home-data';

@NgModule({
  declarations: [
    HomeAddComponent,
    HomeComponent,
    HomeDetailsComponent,
    HomeThreatComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(HomeData),
    RouterModule.forChild([
      { path: '', component: HomeComponent },
      { path: 'threat', component: HomeThreatComponent},
      { path: ':id', component: HomeDetailsComponent },
      { path: ':id/add', component: HomeAddComponent, canDeactivate: [HomeAddGuard] },  
    ])
  ]
})
export class HomeModule { }

