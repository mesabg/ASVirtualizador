export interface Banner{
	title?:string;
	text?:{
		main?:string;
		secondary?:string;
	};
	separator?:boolean;
	classes?:string;
	style?:string;
	innerHTML?:string;
}