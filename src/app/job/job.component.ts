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
  selectedCategories: string[] = [];

  constructor(private categoryService: CategoryService) {
    this.jobOffersList = this.jobService.getAllJobsLocations();
    this.filteredJobsList = this.jobOffersList;
  }

  ngOnInit(): void {
    this.categoryService.selectedCategoriesSubject
      .asObservable()
      .subscribe((categories) => {
        this.selectedCategories = categories
        this.filterResults();
      });
  }

  filterResults(): void {
    if (this.selectedCategories.length == 0) return
    this.filteredJobsList = this.jobOffersList.filter(jobOffer => {
      return this.selectedCategories.every(selected => jobOffer.categories.includes(selected))
    })
  }

  removeCategory(event: any) {
    const clickedCategory = event.target.parentNode.textContent
    const categoryToDelete = clickedCategory.slice(0, -1)
    const indexToDelete = this.selectedCategories.indexOf(categoryToDelete)
    if(indexToDelete !== -1) {
      this.selectedCategories.splice(indexToDelete, 1)
    }
    this.filterResults()
    if(this.selectedCategories.length === 0 )
      this.filteredJobsList = this.jobOffersList
  }

  removeAllCategories() {
    this.selectedCategories = []
    this.categoryService.setCategories(this.selectedCategories)
    this.filteredJobsList = this.jobOffersList
  }
}
