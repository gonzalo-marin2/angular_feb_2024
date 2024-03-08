import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  entrar(usuario:string,password:string):Observable<Cliente>{
    let url:string="http://localhost:9000/login/";
    let params=new HttpParams();
    params=params.set("usuario",usuario);
    params=params.set("password",password);
    return this.http.get<Cliente>(url,{params:params});
  }
}
