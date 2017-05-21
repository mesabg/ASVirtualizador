/**
 * Local Imports
 */
import { MsSidebarItem } from '@ms/components';

/**
 * Const definition
 */
export const ADMIN_SIDEBAR:MsSidebarItem[] = [
	{ title: "Dashboard", ref:"#/admin/dashboard", active:true, icon:"fa-tachometer" },
	{ title: "Cursos", icon: "fa-book", 
		menus: [
			{ title: "Ver Todos", ref: "#/admin/cursos" },
			{ title: "Crear Nuevo", ref: "#/admin/crear-curso" }
		]
	},
	{ title: "Programas", ref:"#", icon:"fa-clone",
		menus: [
			{ title: "Ver Todos", ref: "#/admin/programas" },
			{ title: "Crear Nuevo", ref: "#/admin/crear-programa" }
		]
	},
	{ title: "Proyectos", icon: "fa-desktop", 
		menus: [
			{ title: "Ver Todos", ref: "#/admin/proyectos" },
			{ title: "Crear Nuevo", ref: "#/admin/crear-proyecto" }
		]
	}
]; 