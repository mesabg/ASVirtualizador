/**
 * Global imports
 */
import { Validators } from '@angular/forms';

/**
 * Local Imports
 */
import { FormOptions } from '../classes';

/**
 * FormField Class
 */
export class FormField {
	value: string;
	key: string;
	label: string;
	type: string;
	options?: FormOptions;
	mask: string;
	validators: any[];

	constructor(options: {
		value?: string,
		key?: string,
		label?: string,
		type?: string,
		options?: FormOptions, //-- That are the options of the select
		mask?: string,
		validators?: any[],
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.mask = options.mask || '';
		this.type = options.type || '';
		this.validators = options.validators === undefined ? [] : options.validators;
	}	
}
