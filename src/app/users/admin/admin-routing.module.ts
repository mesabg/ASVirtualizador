/**
 * Module Dependencies
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Local Imports
 */
import { Layout } from './layout';
import { MsComponentsModule } from '@ms/components';
import { DirectivesModule } from '@ms/directives';

/**
 * Pages
 */
import { PagesModule } from './pages';
import { 
	CrearCursoPage,
	CrearProgramaPage,
	CrearProyectoPage,
	CursosPage,
	DashboardPage, 
	ProgramasPage,
	ProyectosPage 
} from './pages';

/**
 * [Routes description]
 * @type {Routes}
 */
const routes: Routes = [{
	path: 'admin',
	component: Layout,
	children: [
		{path: '', redirectTo: 'dashboard', pathMatch: 'full'},
		{path: 'dashboard', component: DashboardPage},
		{path: 'cursos', component: CursosPage},
		{path: 'crear-curso', component: CrearCursoPage},
		{path: 'programas', component: ProgramasPage},
		{path: 'crear-programa', component: CrearProgramaPage},
		{path: 'proyectos', component: ProyectosPage},
		{path: 'crear-proyecto', component: CrearProyectoPage}
	]
}];

/**
 * [Module description]
 */
@NgModule({
	imports: [
		PagesModule,
		MsComponentsModule,
		DirectivesModule,
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	],
	declarations: [
		Layout
	]
})
export class AdminRoutingModule { }
