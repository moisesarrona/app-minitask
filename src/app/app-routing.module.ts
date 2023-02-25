import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinitaskAuthTemplateComponent } from './auth/minitask-auth-template/minitask-auth-template.component';
import { MinitaskTemplateComponent } from './shared/minitask-template/minitask-template.component';
import { LandingTemplateComponent } from './sys-landing/shared/landing-template/landing-template.component';

const routes: Routes = [
  {
    path: 'landing',
    component: LandingTemplateComponent,
    loadChildren: () => import('./sys-landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'login',
    component: MinitaskAuthTemplateComponent,
  },
  {
    path: 'app',
    component: MinitaskTemplateComponent,
    loadChildren: () => import('./sys-minitask/user/user.module').then(m => m.UserModule),
  },
  {
    path: '**',
    redirectTo: 'landing',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
