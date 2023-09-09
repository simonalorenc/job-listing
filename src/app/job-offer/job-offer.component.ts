import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Joboffer } from '../joboffer';

@Component({
  selector: 'app-job-offer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-offer.component.html',
  styleUrls: ['./job-offer.component.scss']
})
export class JobOfferComponent {
  @Input() jobOffer!: Joboffer;
}
