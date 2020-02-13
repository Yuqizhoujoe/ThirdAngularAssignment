import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetHttpRequestComponent } from './get-http-request/get-http-request.component';
import { GetHttpRequestService } from './get-http-request/get-http-request.service';

@NgModule({
  declarations: [
    AppComponent,
    GetHttpRequestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
