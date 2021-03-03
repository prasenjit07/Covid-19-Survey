import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAddComponent } from './home/home-add.component';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HomeData } from './home/home-data';
import { HomeDetailsComponent } from './home/home-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeAddComponent,
    HomeComponent,
    HomeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(HomeData),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


