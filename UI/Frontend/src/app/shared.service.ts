import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000";
  readonly PhotoUrl = "http://127.0.0.1:8000/media/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/departament/');
  }

  addDepartament(val:any){
    return this.http.post(this.APIUrl + '/departament/',val);
  }

  updateDepartament(val:any){
    return this.http.put(this.APIUrl + '/departament/',val);
  }

  deleteDepartament(val:any){
    return this.http.delete(this.APIUrl + '/departament/'+val);
  }

  getEmpList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/employe/');
  }

  addEmploye(val:any){
    return this.http.post(this.APIUrl + '/employe/',val);
  }

  updateEmploye(val:any){
    return this.http.put(this.APIUrl + '/employe/',val);
  }

  deleteEmploye(val:any){
    return this.http.delete(this.APIUrl + '/employe/'+val);
  }

  UploadPhoto(val:any){
    return this.http.post(this.APIUrl + '/SaveFile',val);
  }

  getAllDepartamentNames():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl+'/departament/');
  }

}
