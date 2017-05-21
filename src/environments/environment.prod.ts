export const environment = {
	production: true,
	API:{
		BASE: "http://127.0.0.1:8000/Virtualizacion/api_rest/",
		URL: function(){
			return environment.API.BASE;
		}
	}
};
