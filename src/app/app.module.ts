import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { AppComponent } from './app.component'; // Import AppComponent here
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent // Add AppComponent to the declarations array
    // Other components if you have
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    // Other imported modules if needed
  ],
  providers: [],
  bootstrap: [] // Remove AppComponent from the bootstrap array
})
export class AppModule { }
