import { Component, Input } from '@angular/core';
import { JobOffer } from '../joboffer';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-job-time-characters',
  templateUrl: './job-time-characters.component.html',
  styleUrls: ['./job-time-characters.component.scss']
})
export class JobTimeCharactersComponent{
  @Input() jobOffer!: JobOffer;

  constructor() {
  }
}
