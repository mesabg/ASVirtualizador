import { Component, OnInit } from '@angular/core';

import { MsBanner, MsHistory } from '@ms/components';

@Component({
	selector: 'admin-crear-curso-page',
	templateUrl: './crear-curso.component.html',
	styleUrls: ['./crear-curso.component.scss']
})
export class CrearCursoComponent implements OnInit {
	public histories:MsHistory[] = [
		{ title:"Cursos", icon:"fa-clone" },
		{ title:"Crear Nuevo" }
	];

	public banner:MsBanner = {
		title: "Crear nuevo curso",
		text: {
			main: "En esta sección podrá crear un nuevo curso"
		},
		separator: true
	};
	constructor() { }
	ngOnInit() { }
}
