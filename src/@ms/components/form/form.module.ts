/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Local Imports
 */
import { FormListComponent as MsFormField } from './form-list/form-list.component';
import { FormFieldComponent as MsFormComponent } from './form-field/form-field.component';


/**
 * Module Decalration
 */
@NgModule({
	imports: [
		FormsModule,
		ReactiveFormsModule,
		CommonModule
	],
	declarations: [
		MsFormField,
		MsFormComponent
	],
	exports:[
		MsFormField,
		MsFormComponent
	]
})
export class FormModule { }
