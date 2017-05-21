/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/**
 * Local imports
 */
import { ApiService } from './api.service';

/**
 * [Module description]
 */
@NgModule({
	imports: [
		CommonModule,
		HttpModule
	],
	providers: [
		ApiService
	]
})
export class ApiModule { }
