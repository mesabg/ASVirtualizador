/**
 * Global Imports
 */
import { Component, Input, AfterViewInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Declare JQuery
 */
declare var $:any;

/**
 * Local imports
 */
import { MsHistory } from './interfaces';

/**
 * Component declaration
 */
@Component({
	selector: 'ms-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements AfterViewInit, OnChanges {
	@Input() histories:MsHistory[];
	constructor() {}

	ngAfterViewInit(){
		this.addActiveToLastChild();
	}

	ngOnChanges(){
		$('ul#history li').removeClass('active');
		this.addActiveToLastChild();
	}

	addActiveToLastChild(){
		$("ul#history li:last-child").addClass('active');
	}
}