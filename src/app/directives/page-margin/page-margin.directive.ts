import { Directive, OnInit, ElementRef } from '@angular/core';

//-- Using JQuery Traditional
declare var $:any;

@Directive({
  selector: '[pageMargin]',
  host:{
  	'(click)': 'onChangeEvent()'
  }
})
export class PageMarginDirective implements OnInit {
	private firstPass:boolean = true;

	constructor(private element:ElementRef) { }
	ngOnInit(){ this.setMargin(); }
	onChangeEvent(){ this.setMargin(); }

	setMargin(){
		if ( $(window).width() <= 768 ) return;

		var width = $(this.element.nativeElement).width();
		if ( this.firstPass ) {
			if ( width == 189 ) $('#main-content').css('margin-left', '190px');
			if ( width == 42 ) $('#main-content').css('margin-left', '43px');
			this.firstPass = false;
		}else{
			if ( width == 42 ) $('#main-content').css('margin-left', '190px');
			if ( width == 189 ) $('#main-content').css('margin-left', '43px');
		}

		console.log("function executed.", width);
	}
}
