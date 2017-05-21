export interface SidebarItem {
	title?:string;
	ref?:string;
	icon?:string;
	active?:boolean;
	menus?:SidebarItem[];
}
