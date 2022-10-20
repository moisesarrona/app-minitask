import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MinitaskTemplateComponent } from './minitask-template/minitask-template.component';
import { HeaderComponent } from './minitask-template/header/header.component';
import { SidebarComponent } from './minitask-template/sidebar/sidebar.component';
import { MinitaskAuthTemplateComponent } from './minitask-auth-template/minitask-auth-template.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    MinitaskTemplateComponent,
    HeaderComponent,
    SidebarComponent,
    MinitaskAuthTemplateComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule
  ]
})
export class SharedModule { }
