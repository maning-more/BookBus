import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BusbookingComponent } from './core/busbooking/busbooking.component';
import { HomeComponent } from './core/home/home.component';
// import { TrainbookingComponent } from './core/trainbooking/trainbooking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusbookingComponent,
    HomeComponent,
    // TrainbookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
