/**
 * Import modules
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Import Pages
 */
import { DashboardPage } from './dashboard';
import { ProgramasPage } from './programas';
import { ProyectosPage } from './proyectos';
import { CrearProgramaPage } from './crear-programa';
import { CrearProyectoPage } from './crear-proyecto';
import { CrearCursoPage } from './crear-curso';
import { CursosPage } from './cursos';

/**
 * Local Modules
 */
import { MsComponentsModule } from '@ms/components';
import { ApiModule as VirtualizadorApiModule } from '@api';

/**
 * Module declaration
 */
@NgModule({
	imports: [
		CommonModule,
		VirtualizadorApiModule,
		MsComponentsModule
	],
	declarations: [
		DashboardPage,
		ProgramasPage,
		ProyectosPage,
		CrearProgramaPage,
		CrearProyectoPage,
		CrearCursoPage,
		CursosPage
	],
	exports: [
		DashboardPage,
		ProgramasPage
	]
})
export class PagesModule { }
