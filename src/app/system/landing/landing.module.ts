import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { FooterComponent } from './shared/landing-template/footer/footer.component';
import { HeaderComponent } from './shared/landing-template/header/header.component';
import { LandingTemplateComponent } from './shared/landing-template/landing-template.component';
import { ToastNotificationComponent } from './shared/toast-notification/toast-notification.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LandingTemplateComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ToastNotificationComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
