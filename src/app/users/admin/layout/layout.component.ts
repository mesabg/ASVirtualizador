/**
 * Global imports
 */
import { Component } from '@angular/core';

/**
 * Local Imports
 */
import { MsTask, MsSidebarService, MsSidebarItem, MsUser } from '@ms/components';
import { ADMIN_SIDEBAR } from '../const';

/**
 * [Component Layout of Admin]
 */
@Component({
	selector: 'admin-layout',
	templateUrl: './layout.component.html',
	styleUrls: ['./layout.component.scss'],
	providers: [MsSidebarService]
})
export class LayoutComponent {
	public tasks:MsTask = [
		{ title:'Terminar Correcciones', description:'', progress:30 },
		{ title:'Revisiones Generales', description:'', progress:40 },
		{ title:'Puntos Importantes', description:'', progress:60 },
		{ title:'Visualizar Avances', description:'', progress:80 }
	];

	public user:MsUser = { username:"@mesabg" };

	public sidebar:MsSidebarItem[] = ADMIN_SIDEBAR;
	constructor(private sidebarService:MsSidebarService) {
		this.sidebarService.clickEvent$.subscribe(
			(data) => {
				console.log("Event emit", data);
			});
	}
}
