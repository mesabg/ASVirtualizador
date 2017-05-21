import { Component, OnInit } from '@angular/core';

import { MsBanner, MsHistory } from '@ms/components';

@Component({
	selector: 'admin-cursos-page',
	templateUrl: './cursos.component.html',
	styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {
	public histories:MsHistory[] = [
		{ title:"Cursos", icon:"fa-clone" },
		{ title:"Ver Todos" }
	];
	public banner:MsBanner = {
		title: "Cursos actuales",
		text: {
			main: "En esta sección puede visualizar la lista de cursos actuales en el sistema"
		},
		separator: true
	};
  constructor() { }
  ngOnInit() { }
}
