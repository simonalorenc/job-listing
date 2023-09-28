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
  imports: [
    CommonModule, 
    JobOfferComponent,
  
  ],
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

export class JobComponent implements OnInit{
  jobOffersList: JobOffer[] = []
  jobService: JobsService = inject(JobsService)
  filteredJobsList: JobOffer[] =[]
  selectedCategory: string[] = []

  filterResults(text: string) {
    if (!text) {
      this.filteredJobsList = this.jobOffersList;
    }
  
    this.filteredJobsList = this.jobOffersList.filter(
      jobOffer => jobOffer?.position.toLowerCase().includes(text.toLowerCase())
    )
  }

  constructor(private categoryService: CategoryService) {
    this.jobOffersList = 
    this.jobService.getAllJobsLocations()
    this.filteredJobsList = this.jobOffersList
  }

  ngOnInit(): void {
    this.categoryService.selectedCategories.subscribe(categories => {
      this.selectedCategory = categories
      console.log(categories)
    })
  }
}
