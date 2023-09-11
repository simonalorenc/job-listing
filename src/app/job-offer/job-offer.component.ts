import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joboffer } from '../joboffer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent {
  @Input() jobOffer!: Joboffer;
}
