import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingTemplateComponent } from './system/landing/shared/landing-template/landing-template.component';

const routes: Routes = [
  {
    path: '',
    component: LandingTemplateComponent,
    loadChildren: () => import('./system/landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
