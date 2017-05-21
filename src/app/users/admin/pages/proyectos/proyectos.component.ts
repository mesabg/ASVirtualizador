import { Component, OnInit } from '@angular/core';

import { MsBanner, MsHistory } from '@ms/components';

@Component({
  selector: 'admin-proyectos-page',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  public histories:MsHistory[] = [
		{ title:"Proyectos", icon:"fa-clone" },
		{ title:"Ver Todos" }
	];
	public banner:MsBanner = {
		title: "Proyectos actuales",
		text: {
			main: "En esta sección puede visualizar todos los proyectos que actualmente están en proceso de virtualización"
		},
		separator: true
	};
	constructor() { }
	ngOnInit() { }
}
