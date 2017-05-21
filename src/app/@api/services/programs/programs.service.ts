/**
 * Global Imports
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/**
 * Local imports
 */
import { MsApiService } from '@ms/api';
import { Program } from './program.interface';

/**
 * Service to manage programs routes
 */
@Injectable()
export class ProgramsService {
	constructor(private apiService:MsApiService) { }

	public getPrograms():Observable<Program[]>{
		return this.apiService.get(`get_programs`).map(
			(response) => {
				let programs:Program[] = new Array();
				response.json().data.forEach((programObj)=>{
					programs.push({
						f_code: programObj.programa.f_code,
						f_name: programObj.programa.f_name,
						f_duration: programObj.programa.f_duration,
						created_on: programObj.programa.created_on,
						virtualizado: programObj.virtualizado
					});
				});
				return programs;
			});
	}
}
