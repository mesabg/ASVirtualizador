import { Directive, OnInit  } from '@angular/core';

//-- Using JQuery Traditional
declare var $:any;

@Directive({
  selector: '.sidebar-toggle',
  host:{
  	'(click)': 'onChangeEvent()',
  	'(window.resize)': 'onChangeEvent()'
  }
})
export class PageMarginDirective implements OnInit {
	constructor() { }
	ngOnInit(){ 
		if ( $(window).width() <= 768 ) return;
		if ($("#sidebar").hasClass('menu-min')) $('#main-content').css('margin-left', '43px');
		else $('#main-content').css('margin-left', '190px');
	}

	onChangeEvent(){ this.setMargin(); }

	setMargin(){
		if ( $(window).width() <= 768 ) return;
		var width = $("#sidebar").width();
		if ( width == 42 ) $('#main-content').css('margin-left', '190px');
		if ( width == 189 ) $('#main-content').css('margin-left', '43px');
	}
}
