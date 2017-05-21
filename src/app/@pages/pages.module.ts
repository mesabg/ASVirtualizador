/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local Modules Imports
 */
import { MsComponentsModule } from '@ms/components';

/**
 * Pages
 */
import { NotFoundPage } from './404';
import { HomePage } from './home';
import { LoginPage } from './login';

/**
 * Module declaration
 */
@NgModule({
	imports: [
		CommonModule,
		MsComponentsModule
	],
	declarations: [
		NotFoundPage,
		HomePage,
		LoginPage
	],
	exports:[
		NotFoundPage,
		HomePage,
		LoginPage
	]
})
export class PagesModule { }
