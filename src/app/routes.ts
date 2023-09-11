import { Routes } from '@angular/router';
import { JobComponent } from './job/job.component';
import { DetailsComponent } from './details/details.component';
const routeConfig: Routes = [
  {
    path: '',
    component: JobComponent,
    title: 'Job offers page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Job offer details'
  }
];

export default routeConfig;