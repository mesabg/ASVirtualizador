export interface Table {
	titles?:{
		name?:string;
		slug?:string;
	}[];
	rows?:any[];
	inverse?:boolean;
}
