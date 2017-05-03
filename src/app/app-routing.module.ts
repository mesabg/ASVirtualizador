import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
Importing Pages
 */
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { _404Component } from './pages/404/404.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{path: '', redirectTo: 'inicio', pathMatch: 'full'},
			{path: 'inicio', component: HomeComponent},
			{path: 'iniciarsesion', component: LoginComponent},
			{path: '**', component: _404Component}
		]
	}
];

/**
 * [NgModule description]
 */
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
