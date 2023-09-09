import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joboffer } from '../joboffer';

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="job-offer">
      <div class="job-main-info">
        <div class="job=logo">
          <img [src]="jobOffer.image" alt="">
        </div>
        <div class="job-info">
          <div class="job-info__name">{{jobOffer.name}}</div>
          <div class="job-info__position">{{jobOffer.position}}</div>
          <div class="job-info__time-place">{{jobOffer.timeCharacters}}</div>
        </div>
      </div>
      <div class="job-categories">
        <div class="job-categories__category"{{jobOffer.categories}}></div>
      </div>
    </section>
  `,
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent {
  @Input() jobOffer!: Joboffer;
}
