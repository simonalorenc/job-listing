import { Injectable } from '@angular/core';
import { Joboffer } from './joboffer';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  jobOffersList: Joboffer[] = [
    {
      id: 1,
      image: './assets/photosnap.svg',
      name: 'Photosnap',
      position: 'Senior Frontend Developer',
      timeCharacters: ['1d ago', 'Full Time', 'USA only'],
      categories: ['Frontend', 'Senior', 'HTML', 'CSS','JavaScript']
    },
    {
      id: 2,
      image: './assets/manage.svg',
      name: 'Manage',
      position: 'Fullstack Developer',
      timeCharacters: ['1d ago', 'Part Time', 'Remote'],
      categories: ['Fullstack', 'Midweight', 'Python', 'React']
    },
    {
      id: 3,
      image: './assets/account.svg',
      name: 'Account',
      position: 'Junior Frontend Developer',
      timeCharacters: ['2d ago', 'Part Time', 'USA only'],
      categories: ['Frontend', 'Junior', 'React', 'Sass','JavaScript']
    },
    {
      id: 4,
      image: './assets/myhome.svg',
      name: 'MyHome',
      position: 'Junior Frontend Developer',
      timeCharacters: ['5d ago', 'Contract', 'USA only'],
      categories: ['Frontend', 'Junior', 'CSS','JavaScript']
    },
    {
      id: 5,
      image: './assets/loop-studios.svg',
      name: 'Loop Studios',
      position: 'Software Engineer',
      timeCharacters: ['1w ago', 'Full time', 'Worldwide'],
      categories: ['Fullstack', 'Midweight', 'JavaScript', 'Sass', 'Ruby']
    },
    {
      id: 6,
      image: './assets/faceit.svg',
      name: 'FaceIt',
      position: 'Junior Backend Developer',
      timeCharacters: ['2w ago', 'Full time', 'UK only'],
      categories: ['Backend', 'Junior', 'Ruby', 'RoR']
    },
    {
      id: 7,
      image: './assets/shortly.svg',
      name: 'Shortly',
      position: 'Junior Developer',
      timeCharacters: ['2w ago', 'Full time', 'USA only'],
      categories: ['Frontend', 'Junior', 'HTML', 'Sass','JavaScript']
    }
  ]

  getAllJobsLocations(): Joboffer[] {
    return this.jobOffersList
  }

  getJobsOffersById(id: number): Joboffer | undefined {
    return this.jobOffersList.find(JobOffer => JobOffer.id === id)
  } 
}
