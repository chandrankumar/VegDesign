import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  imports: [
    DashboardRoutingModule,
    MatGridListModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
