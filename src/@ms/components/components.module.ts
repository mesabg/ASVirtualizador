/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe';

/**
 * Module Imports
 */
import { MsSidebarModule } from './sidebar';
import { MsFormModule } from './form';

/**
 * Components Imports
 */
import { MsHeaderComponent } from './header';
import { MsFooterComponent } from './footer';
import { MsBannerComponent } from './banner';
import { MsTableComponent } from './table';
import { MsHistoryComponent } from './history';

/**
 * [Module description]
 */
@NgModule({
	imports: [
		CommonModule,
		MsFormModule,
		MsSidebarModule,
		Ng2OrderModule
	],
	declarations: [
		MsHeaderComponent,
		MsFooterComponent,
		MsBannerComponent,
		MsTableComponent,
		MsHistoryComponent
	],
	exports: [
		//-- Components
		MsHeaderComponent,
		MsFooterComponent,
		MsBannerComponent,
		MsTableComponent,
		MsHistoryComponent,

		//-- Modules
		MsSidebarModule,
		MsFormModule
	]
})
export class ComponentsModule {

}
