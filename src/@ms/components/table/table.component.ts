/**
 * Global Imports
 */
import { Component, Input, OnChanges } from '@angular/core';

/**
 * Interfaces imports
 */
import { MsTable } from './interfaces';

/**
 * [Component to render a table, depending on some @Input() parameters]
 */
@Component({
	selector: 'ms-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent{
	/**
	 * Inputs
	 */
	@Input() table:MsTable;
}
