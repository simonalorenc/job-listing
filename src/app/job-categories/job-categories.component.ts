import { Component, Input } from '@angular/core';
import { JobOffer } from '../joboffer';
import { JobsService } from '../jobs.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../category.service';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.scss']
})
export class JobCategoriesComponent {
  @Input() jobOffer!: JobOffer;

  constructor(private categoryService: CategoryService) {}

  onCategoryClick(category: string) {
    this.categoryService.setSelectedCategory(category)
  }

}