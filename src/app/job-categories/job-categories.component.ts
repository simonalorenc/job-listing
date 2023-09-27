import { Component, Input } from '@angular/core';
import { JobOffer } from '../joboffer';
import { JobsService } from '../jobs.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.scss']
})
export class JobCategoriesComponent {
  @Input() jobOffer!: JobOffer;

}


// function createJobCategoriesArea(offer, parentContainer) {
//   const jobRequirements = document.createElement('div')
//   jobRequirements.classList.add('job-categories')
//   parentContainer.appendChild(jobRequirements)
//   for (let i = 0; i < offer.workCharacters.length; i++) {
//       const oneRequirement = document.createElement('div')
//       oneRequirement.classList.add('job-categories__category')
//       oneRequirement.textContent += offer.workCharacters[i]
//       oneRequirement.addEventListener('click', makeCategoriesClickable)
//       jobRequirements.appendChild(oneRequirement)
//   }
// }