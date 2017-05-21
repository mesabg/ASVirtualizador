/**
 * Global Imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/**
 * Local Imports
 */
import { AppRoutingModule } from './app-routing.module';
import { Layout } from './layout';
import { UsersModule } from './users';

/**
 * [NgModule description]
 * Main Module Declaration
 */
@NgModule({
	declarations: [
		Layout
	],
	imports: [
		BrowserModule,
		UsersModule,
		AppRoutingModule
	],
	bootstrap: [Layout]
})
export class AppModule {}
