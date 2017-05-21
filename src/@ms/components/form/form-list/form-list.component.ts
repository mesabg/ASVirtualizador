/**
 * Global Imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Services Imports
 */
import { FormService } from '../form.service';

/**
 * [Component to render a list baseb on fields (interface:array)]
 */
@Component({
	selector: 'ms-form',
	templateUrl: './form-list.component.html',
	styleUrls: ['./form-list.component.scss']
})
export class FormListComponent implements OnInit {
	constructor(public formService:FormService) { }
	ngOnInit() { }
}
