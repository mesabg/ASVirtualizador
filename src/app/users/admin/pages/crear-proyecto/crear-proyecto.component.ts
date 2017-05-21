import { Component, OnInit } from '@angular/core';

import { MsBanner, MsHistory } from '@ms/components';

@Component({
	selector: 'admin-crear-proyecto-page',
	templateUrl: './crear-proyecto.component.html',
	styleUrls: ['./crear-proyecto.component.scss']
})
export class CrearProyectoComponent implements OnInit {
	public histories:MsHistory[] = [
		{ title:"Proyectos", icon:"fa-clone" },
		{ title:"Crear Nuevo" }
	];

	public banner:MsBanner = {
		title: "Crear nuevo proyecto",
		text: {
			main: "En esta sección podrá crear un nuevo proyecto e iniciar su virtualización"
		},
		separator: true
	};
  constructor() { }
  ngOnInit() { }
}
