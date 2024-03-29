import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MinitaskTemplateComponent } from './minitask-template/minitask-template.component';
import { HeaderComponent } from './minitask-template/header/header.component';
import { SidebarComponent } from './minitask-template/sidebar/sidebar.component';
import { MinitaskAuthTemplateComponent } from '../auth/minitask-auth-template/minitask-auth-template.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BaseComponent } from './components/base/base.component';
import { ToastComponent } from './components/toast/toast.component';


@NgModule({
  declarations: [
    MinitaskTemplateComponent,
    HeaderComponent,
    SidebarComponent,
    MinitaskAuthTemplateComponent,
    BaseComponent,
    ToastComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
})
export class SharedModule { }
