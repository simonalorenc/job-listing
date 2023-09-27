import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from '../job-offer/job-offer.component';
import { JobOffer } from '../joboffer';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    CommonModule, 
    JobOfferComponent
  ],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent {

  jobOffersList: JobOffer[] = []
  jobService: JobsService = inject(JobsService)
  filteredJobsList: JobOffer[] =[]

  filterResults(text: string) {
    if (!text) {
      this.filteredJobsList = this.jobOffersList;
    }
  
    this.filteredJobsList = this.jobOffersList.filter(
      jobOffer => jobOffer?.position.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.jobOffersList = 
  this.jobService.getAllJobsLocations()
    this.filteredJobsList = this.jobOffersList
  }
}
