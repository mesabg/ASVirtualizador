/**
 * Components
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local Imports
 */
import { MsBanner, MsHistory } from '@ms/components';

@Component({
	selector: 'admin-programas-page',
	templateUrl: './programas.component.html',
	styleUrls: ['./programas.component.scss']
})
export class ProgramasComponent implements OnInit {
	/**
	 * Components to be render on view
	 */
	public histories:MsHistory[] = [
		{ title:"Programas", icon:"fa-clone" },
		{ title:"Ver todos" }
	];

	public banner:MsBanner = {
		title: "Programas",
		text: {
			main: "Programas actuales cargados en el sistema"
		},
		separator: true,
	};
	
	constructor() { }
	ngOnInit() {}
}
