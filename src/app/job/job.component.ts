import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobOfferComponent } from '../job-offer/job-offer.component';
import { JobOffer } from '../joboffer';
import { JobsService } from '../jobs.service';
import { CategoryService } from '../category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, JobOfferComponent, FormsModule],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  jobOffersList: JobOffer[] = [];
  jobService: JobsService = inject(JobsService);
  filteredJobsList: JobOffer[] = [];
  newCategory: string = '';
  selectedCategories: string[] = [];

  constructor(private categoryService: CategoryService) {
    this.jobOffersList = this.jobService.getAllJobsLocations();
    this.filteredJobsList = this.jobOffersList;
  }

  ngOnInit(): void {
    this.categoryService.selectedCategories.subscribe((category) => {
      this.selectedCategories = category;
      this.newCategory =
        this.selectedCategories[this.selectedCategories.length - 1];
      this.filterResuts();
    });
  }

  filterResuts(): void {
    if (!this.newCategory) {
      this.filteredJobsList = this.jobOffersList;
    } else {
      let jobOfferToRender: JobOffer[] = [];
      this.jobOffersList.filter((jobOffer) => {
        for (let i = 0; i < jobOffer.categories.length; i++) {
          if (jobOffer.categories[i] === this.newCategory) {
            jobOfferToRender.push(jobOffer);
            console.log(jobOfferToRender);
            this.filteredJobsList = jobOfferToRender;
          }
        }
      });
    }
  }

  // filterResults(text: string) {
  //   console.log(text)
  //   if (!text) {
  //     this.filteredJobsList = this.jobOffersList;
  //   }

  //   this.filteredJobsList = this.jobOffersList.filter(
  //     jobOffer => jobOffer?.position.toLowerCase().includes(text.toLowerCase())
  //   )
  // }

  // addNewCategory() {
  //   if(this.newCategory.trim() !== '') {
  //     this.selectedCategories.push(this.newCategory)
  //     this.newCategory = ''
  //   }
  // }
}
