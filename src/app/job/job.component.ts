import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from '../job-offer/job-offer.component';
import { Joboffer } from '../joboffer';

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
        <app-job-offer [jobOffer]="jobOffer"></app-job-offer>
      </div>
    </section>
  `,
  styleUrls: ['./job.component.scss']
})

export class JobComponent {

  jobOffer: Joboffer = {
    id: 1,
    image: './assets/photosnap.svg',
    name: 'Photosnap',
    position: 'Senior Frontend Developer',
    timeCharacters: ['1d ago', 'Full time'],
    categories: ['Frontend', 'JavaScript']
  }
}
