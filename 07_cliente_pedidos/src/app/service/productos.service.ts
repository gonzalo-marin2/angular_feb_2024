import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto   } from '../model/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  urlBase:string="http://localhost:8000/productos";
  constructor(private http:HttpClient) { }

  productos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlBase);
  }
}
