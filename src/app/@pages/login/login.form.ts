/**
 * Global Imports
 */
import { Validators } from '@angular/forms';

/**
 * Local Imports
 */
import { MsFormField } from '@ms/components';

/**
 * Const that defines form
 */
export const LOGIN_FORM:MsFormField[] = [
	new MsFormField({
		key: 'email',
		label: 'Email',
		type: 'email',
		validators: [
			Validators.required,
			Validators.email
		]
	}),
    new MsFormField({
		key: 'password',
		label: 'Password',
		type: 'password',
		validators: [
			Validators.required,
			Validators.minLength(4)
		]
	})
]; 