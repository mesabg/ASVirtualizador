/**
 * Global Imports
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * Local Imports
 */
import { MsSidebarItem } from '../interfaces';

/**
 * [Component to render an inten of a sidebar]
 */
@Component({
	selector: 'li[ms-sidebar-item]',
	templateUrl: './sidebar-item.component.html',
	styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
	/**
	 * Inputs
	 */
	@Input() item:MsSidebarItem;

	constructor() { }
}
