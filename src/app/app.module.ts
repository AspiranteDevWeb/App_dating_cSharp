import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import {FormsModule} from "@angular/forms";
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
import { HomeComponent } from './home/home.component';
//import { NavSkipTestsComponent } from "./nav --skip-tests/nav --skip-tests.component";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent//,
    //NavSkipTestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
