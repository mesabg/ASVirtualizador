/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local Modules
 */
import { AdminModule } from './admin';

/**
 * [UserModule description]
 */
@NgModule({
	imports: [
		CommonModule,
		AdminModule
	],
	exports: [  
		AdminModule
	]
})
export class UsersModule { }
