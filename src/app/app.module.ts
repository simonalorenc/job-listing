import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobOfferComponent } from './job-offer/job-offer.component';
import { JobComponent } from './job/job.component';
import { RouterModule } from '@angular/router';
import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './routes';
import { JobCategoriesComponent } from './job-categories/job-categories.component';
import { JobTimeCharactersComponent } from './job-time-characters/job-time-characters.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobComponent,
    JobOfferComponent,
    RouterModule,
    JobCategoriesComponent,
    JobTimeCharactersComponent
  ],
  providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
