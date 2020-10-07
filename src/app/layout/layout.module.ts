import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutRoutingModule } from './layout-routing.module';
import {NgWhiteboardModule} from 'ng-whiteboard';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgWhiteboardModule,
  ]
})
export class LayoutModule { }
