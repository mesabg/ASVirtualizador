/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local Imports
 */
import { AdminRoutingModule } from './admin-routing.module';

/**
 * [Admin Module description]
 */
@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule
	],
	exports: [
		AdminRoutingModule
	]
})
export class AdminModule { }
