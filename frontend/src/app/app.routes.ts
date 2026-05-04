import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { TrainerListComponent } from './trainer-list/trainer-list';
import { CustomerPageComponent } from './customer-page/customer-page';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'trainers', component: TrainerListComponent },
  { path: 'customers', component: CustomerPageComponent }
];