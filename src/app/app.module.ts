/**
 * Some Dependencies
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/**
 * Main Routing Module
 */
import { AppRoutingModule } from './app-routing.module';

/*
 * Main Component
 */
import { AppComponent } from './app.component';

/**
 * Necesary Modules
 */
import { AdminModule } from './modules/admin/admin.module';
import { CoordinadorModule } from './modules/coordinador/coordinador.module';
import { DisenadorModule } from './modules/disenador/disenador.module';
import { EspecialistaModule } from './modules/especialista/especialista.module';
import { TecnicoModule } from './modules/tecnico/tecnico.module';

/**
 * Global Components
 */
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { _404Component } from './pages/404/404.component';

/**
 * Global Directives
 */
import { PageMarginDirective } from './directives/page-margin/page-margin.directive';


/**
 * [NgModule description]
 * Main Module Declaration
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    PageMarginDirective,
    _404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminModule,
    CoordinadorModule,
    DisenadorModule,
    EspecialistaModule,
    TecnicoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
