import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Include Directives
 */
import { PageMarginDirective } from './page-margin';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		PageMarginDirective
	], 
	exports: [
		PageMarginDirective
	]
})
export class DirectivesModule { }
