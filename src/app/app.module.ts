import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobComponent,
    JobOfferComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
