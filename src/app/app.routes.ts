import { Routes } from '@angular/router';

import { HomeComponent } from './home';
import { ItemFormComponent } from './itemForm';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'form/item', component: ItemFormComponent },
  { path: 'form/item/:itemObjKey', component: ItemFormComponent },
];
