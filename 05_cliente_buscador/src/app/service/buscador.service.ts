import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from '../model/Resultado';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {

  constructor(private http:HttpClient) { }
  //en el module necesitaremos importar el HttpClientModule

  //necesitamos un método para comunicarnos con el servicio externo
  //devuelve un Observable
  buscarResultados(tematica:string):Observable<Resultado[]>{
    let url:string="http://localhost:7000/buscador/buscar";
    //para llamar a recursos externos utilizamos la clase HttpClient que devuelve un Observable
    //es una llamada asíncrona(las antiguas promesas)
    return this.http.get<Resultado[]>(url+"?tematica="+tematica);
  }
}
