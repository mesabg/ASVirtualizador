import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * Routing Module
 */
import { AdminRoutingModule } from './admin-routing.module';

/**
 * Pages Components
 */
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
  	DashboardComponent
  ]
})
export class AdminModule { }
