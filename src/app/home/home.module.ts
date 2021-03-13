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
import { HomeResolverService } from './home-resolver.service'
import { HomesResolverService } from './homes-resolver.service';

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
      {
        path: '',
        component: HomeComponent,
        resolve: { resolvedData: HomesResolverService }
      },
      {
        path: 'threat',
        component: HomeThreatComponent,
        resolve: { resolvedData: HomesResolverService }
      },
      {
        path: ':id',
        component: HomeDetailsComponent,
        resolve: { resolvedData: HomeResolverService }
      },
      {
        path: ':id/add',
        component: HomeAddComponent,
        canDeactivate: [HomeAddGuard],
        resolve: { resolvedData: HomeResolverService }
      },
    ])
  ]
})
export class HomeModule { }

