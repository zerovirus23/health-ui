import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanyComponent } from './company/company.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { SurveyTemplateComponent } from './survey-template/survey-template.component';
import { CallbackComponent } from './shared_components/callback/callback.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent},
  { path: 'specialty', component: SpecialtyComponent},
  { path: 'specialty/:specialtyId/survey-template', component: SurveyTemplateComponent},
  { path: 'callback', component: CallbackComponent},
  { path: '**', redirectTo: '' }
];