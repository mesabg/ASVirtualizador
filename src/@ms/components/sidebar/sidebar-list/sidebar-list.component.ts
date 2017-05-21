/**
 * Global Imports
 */
import { Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * JQuery
 */
declare var $:any;

/**
 * Local Imports
 */
import { MsSidebarItem } from '../interfaces';

/**
 * Services Imports
 */
import { SidebarService } from '../sidebar.service';

/**
 * [Component to render a sidebar with some parameters]
 */
@Component({
	selector: 'ms-sidebar',
	templateUrl: './sidebar-list.component.html',
	styleUrls: ['./sidebar-list.component.scss'],
	host:{
		'(click)': 'onClickEvent($event)'
	}
})
export class SidebarListComponent {
	/**
	 * Inputs
	 */
	@Input() items:MsSidebarItem[];
	constructor(public sidebarService:SidebarService) { }

	shortcutClick($event){
		this.sidebarService.clickEvent$.emit($event);
	}

	onClickEvent($event){
		let nodeName = "";
		let element = $event.toElement;
		let index = 0;
		while (nodeName != "LI" && index <= 2) { 
			element = ($(element).parent())[0]; 
			nodeName = element.nodeName; 
			index++;
		}
		if ( nodeName != "LI" ) return;
		$('#sidebar li').removeClass('active');
		$(element).addClass('active');
	}
}
