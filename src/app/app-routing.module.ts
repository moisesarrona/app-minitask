import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './system/landing/shared/full/full.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    loadChildren: () => import('./system/landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
