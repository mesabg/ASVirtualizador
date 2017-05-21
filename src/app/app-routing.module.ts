/**
 * Global Imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * Local Imports
 */
import { PagesModule } from '@pages';
import { HomePage, LoginPage, NotFoundPage } from '@pages';

/**
 * Routes definition
 */
const routes: Routes = [{
	path: '',
	children: [
		{path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'},
		{path: 'inicio', component: HomePage},
		{path: 'iniciar-sesion', component: LoginPage},
		{path: '**', component: NotFoundPage}
	]
}];

/**
 * [Routing Module description]
 */
@NgModule({
	imports: [
		PagesModule,
		RouterModule.forRoot(routes, {useHash: true})
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
