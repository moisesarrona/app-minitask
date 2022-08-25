import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { MinitaskTemplateComponent } from './minitask-template/minitask-template.component';
import { HeaderComponent } from './minitask-template/header/header.component';
import { SidebarComponent } from './minitask-template/sidebar/sidebar.component';
import { ExampleComponent } from './example/example.component';


@NgModule({
  declarations: [
    MinitaskTemplateComponent,
    HeaderComponent,
    SidebarComponent,
    ExampleComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
