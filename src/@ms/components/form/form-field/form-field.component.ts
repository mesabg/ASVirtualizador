/**
 * Global Imports
 */
import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

/**
 * JQuery Mask
 */
declare var $:any;

/**
 * Local Imports
 */
import { FormField, FormOptions } from '../classes';

/**
 * [Component to render a field of a form]
 */
@Component({
	selector: 'ms-form-field',
	templateUrl: './form-field.component.html',
	styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, AfterViewInit {
	/**
	 * Inputs
	 */
	@Input() field:FormField;
	@Input() form:FormGroup;

	/**
	 * Variables
	 */
	public control:AbstractControl;

	constructor(private element:ElementRef) { }

	ngOnInit() {
		this.control = this.form.controls[this.field.key];
	}

	ngAfterViewInit(){
		if (this.field.mask == '' || this.field.mask == undefined) return;
		$(this.element.nativeElement).children('input').mask(this.field.mask);
	}

	get isValid() {
		return this.control.valid;
	}
}
