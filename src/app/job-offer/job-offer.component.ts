import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOffer } from '../joboffer';
import { RouterLink, RouterOutlet } from '@angular/router';
import { JobCategoriesComponent } from '../job-categories/job-categories.component';
import { JobTimeCharactersComponent } from '../job-time-characters/job-time-characters.component';

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    JobCategoriesComponent,
    JobTimeCharactersComponent
  ],
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent implements OnInit {
  @Input() jobOffer!: JobOffer;

  ngOnInit(): void {
    // console.log(this.jobOffer)
  }
}
