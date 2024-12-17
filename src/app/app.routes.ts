import { Routes } from '@angular/router';
import { FormInputComponent } from './form-input/form-input.component';
import { FormOutputComponent } from './form-output/form-output.component';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'investment', component: FormInputComponent },
  { path: 'result', component: FormOutputComponent },

];
