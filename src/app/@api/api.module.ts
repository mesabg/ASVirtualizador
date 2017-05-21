/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import MsApiModule
 */
import { MsApiModule } from '@ms/api';

/**
 * Import Services
 */
import { 
	AuthApi, 
	AuthGuardService,
	CoursesApi,
	ProgramsApi,
	ProjectsApi,
	ResourcesApi
} from './services';

/**
 * [Module description]
 */
@NgModule({
	imports: [
		CommonModule,
		MsApiModule
	],
	declarations: [],
	providers:[
		AuthApi, 
		AuthGuardService,
		CoursesApi,
		ProgramsApi,
		ProjectsApi,
		ResourcesApi
	]
})
export class ApiModule { }
