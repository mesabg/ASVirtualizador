/**
 * Module dependencies
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

/**
 * Routing Module
 */
import { EspecialistaRoutingModule } from './especialista-routing.module';

/**
 * [NgModule description]
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EspecialistaRoutingModule
  ],
  declarations: [DashboardComponent]
})
export class EspecialistaModule { }
