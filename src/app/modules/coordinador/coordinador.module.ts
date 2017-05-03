/**
 * Module Dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

/**
 * Routing Module
 */
import { CoordinadorRoutingModule } from './coordinador-routing.module';

/**
 * [NgModule description]
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoordinadorRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class CoordinadorModule { }
