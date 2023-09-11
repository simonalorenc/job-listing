import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../jobs.service';
import { Joboffer } from '../joboffer';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  template: `
    <p>
      details works! {{ jobOffer?.id }}
    </p>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to work here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Apply now</button>
      </form>
    </section>
  `,
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  jobsService = inject(JobsService)
  jobOffer: Joboffer | undefined

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
