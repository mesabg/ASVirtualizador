/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Local Imports
 */
import { DirectivesModule } from '@ms/directives';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { SidebarListComponent } from './sidebar-list/sidebar-list.component';

/**
 * [Module SideBar to build and manage a concrete instansce of a sidebar]
 */
@NgModule({
	imports: [
		CommonModule,
		DirectivesModule
	],
	declarations: [
		SidebarItemComponent, 
		SidebarListComponent
	],
	exports:[
		SidebarItemComponent, 
		SidebarListComponent
	]
})
export class SidebarModule { }
