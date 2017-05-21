/**
 * Global Imports
 */
import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from  '@angular/platform-browser';
declare var $:any;

/**
 * Local Imports
 */
import { MsApiService } from '@ms/api';
import { MsFormService, MsBanner } from '@ms/components';
import { LOGIN_FORM } from './login.form';
import { CommonResponse } from '@interfaces';

interface Login{
	email:string;
	password:string;
}

@Component({
	selector: 'login-page',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	providers: [MsFormService],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, AfterViewInit {
	public banner:MsBanner = {
		title: "Ingresa",
		text: {
			main: "Inicia sesión en el sistema"
		},
		separator: true,
	};

	constructor(
		//-- Some Injections
		private apiService:MsApiService, 
		private formService:MsFormService, 
		private router:Router){
		//-- Constructor
		this.formService.initForm(LOGIN_FORM);
		this.formService.submit$.subscribe( data => this.submit(<Login>data) );
	}

	ngOnInit(){
	}

	ngAfterViewInit(){
		console.log($('body'));
		$('.modal').modal();
	}

	public submit(data:Login){
		this.apiService.post("Login", data).subscribe(
			(response:CommonResponse) => {
				console.log(response);
				if (response.status == "200"){
					//-- Login Exitoso
					this.apiService.setApiKey(response.contenido.api_key);
					var self = this;
					$(".alert-message").alert();
					window.setTimeout(function() { 
						$(".alert-message").alert('close'); 
						self.router.navigateByUrl("/admin/dashboard");
					}, 2000);
				}else if (response.status == "400"){
					//-- Login error
					alert("Ingreso fallido, intenta de nuevo");
				}else if (response.status == "500"){
					//-- Internal Server error
					alert("Error de servidor");
				}else{
					//-- Another error
					alert("Error de servidor");
				}
			});
	}
}