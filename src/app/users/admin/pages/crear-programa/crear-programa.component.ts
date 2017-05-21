import { Component, OnInit } from '@angular/core';

import { MsBanner, MsHistory } from '@ms/components';

@Component({
	selector: 'admin-crear-proyecto-page',
	templateUrl: './crear-programa.component.html',
	styleUrls: ['./crear-programa.component.scss']
})
export class CrearProgramaComponent implements OnInit {
  public histories:MsHistory[] = [
		{ title:"Programas", icon:"fa-clone" },
		{ title:"Crear Nuevo" }
	];

  public banner:MsBanner = {
		title: "Crear nuevo programa",
		text: {
			main: "En esta sección podrá crear un nuevo programa"
		},
		separator: true
	};
  constructor() { }

  ngOnInit() {
  }

}
