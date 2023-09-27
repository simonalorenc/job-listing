import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { JobOffer } from '../joboffer';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  jobsService = inject(JobsService)
  jobOffer: JobOffer | undefined

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const jobOfferId = Number(this.route.snapshot.params['id'])
    this.jobOffer = this.jobsService.getJobsOffersById(jobOfferId)
  }

  submitApplication() {
    this.jobsService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
