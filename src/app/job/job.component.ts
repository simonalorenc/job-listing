import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from '../job-offer/job-offer.component';
import { Joboffer } from '../joboffer';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CommonModule, 
    JobOfferComponent
  ],
  template: `
    <section>
      <div class="filter-input-container">
        <input class="filter-input" type="text" placeholder="Filter by category">
      </div>
      <div class="job-offers-container">
        <app-job-offer *ngFor='let jobOffer of jobOffersList' [jobOffer]="jobOffer"></app-job-offer>
      </div>
    </section>
  `,
  styleUrls: ['./job.component.scss']
})

export class JobComponent {

  jobOffersList: Joboffer[] = []
  jobService: JobsService = inject(JobsService)

  constructor() {
    this.jobOffersList = 
  this.jobService.getAllJobsLocations()
  }
}
