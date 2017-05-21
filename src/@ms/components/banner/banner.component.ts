/**
 * Global Imports
 */
import { Component, Input } from '@angular/core';

/**
 * Local Imports
 */
import { Banner } from './banner.interface';

/**
 * [Component to render a banner using bootstrap]
 */
@Component({
	selector: 'ms-banner',
	templateUrl: './banner.component.html',
	styleUrls: ['./banner.component.scss']
})
export class BannerComponent{
	/**
	 * Inputs
	 */
	@Input() banner:Banner;
	constructor() { }
}
