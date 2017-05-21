/**
 * Global Imports
 */
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/**
 * [Service description]
 */
@Injectable()
export class SidebarService {
	/**
	 * Events
	 */
	public clickEvent$ = new EventEmitter<any>();

	constructor() { }
}
