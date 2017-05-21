/**
 * Global imports
 */
import { Component, OnInit } from '@angular/core';

/**
 * Local imports
 */
import { MsBanner, MsHistory, MsTable } from '@ms/components';
import { ProgramsApi, Program } from '@api';

interface TableData {
	f_code:string;
	f_name:string;
	f_duration:number;
	created_on:Date;
	virtualizado:boolean;
}

@Component({
	selector: 'admin-dashboard-page',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	/**
	 * Elements to be rendered on a view
	 */
	public histories:MsHistory[] = [
		{ title:"Dashboard", icon:"fa-tachometer", ref: "" }
	];

	public banner:MsBanner = {
		title: "Dashboard",
		text: {
			main: "Estatus general de virtualizaciones"
		},
		separator: true,
	};

	public tableData:TableData[] = new Array<any>();

	public table:MsTable = {
		titles:[
			{name:'Código', slug:'f_code'},
			{name:'Nombre', slug:'f_name'},
			{name:'Duración', slug:'f_duration'},
			{name:'Creación', slug:'created_on'},
			{name:'Virtualizado', slug:'virtualizado'}
		],
		rows: [],
		inverse: false
	};

	constructor(private programsApiService:ProgramsApi){}

	ngOnInit() {
		//-- Getting data from API Rest
		this.programsApiService
			.getPrograms()
			.subscribe((response:Program[]) => this.table.rows = response);
	}
}
