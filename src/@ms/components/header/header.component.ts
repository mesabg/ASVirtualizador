/**
 * Global Imports
 */
import { Component, Input, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { MsTask, MsNotification, MsMessage, MsUser } from './interfaces';

/**
 * Using JQuery
 */
declare var $:any; 

/**
 * [Component description]
 */
@Component({
	selector: 'ms-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges, AfterViewInit {
	/**
	 * [Inputs section]
	 * @param {Task[]} tasks [Tasks array]
	 * @param {Notification[]} notifications [Notifications array]
	 * @param {Message[]} messages [Messages array]
	 * @param {User[]} user [User]
	 */
	@Input() tasks:MsTask[];
	@Input() notifications:MsNotification[];
	@Input() messages:MsMessage[];
	@Input() user:MsUser;
	
	constructor() {}

	ngOnInit(){this.taskProgress();}
	ngOnChanges(){this.taskProgress();}
	ngAfterViewInit(){this.taskProgress();}

	//-- To increment status on task (status bar)
	taskProgress(){
		var taskProgressElements = $('div.progress-bar');
		$.each(taskProgressElements, function(element, index){
			var progress = $(this).attr('progress');
			if ( progress == undefined ) return;
			$(this).css('width', `${progress}%`);
		});
	}
}
