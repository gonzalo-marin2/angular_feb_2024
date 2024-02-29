import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  url="http://localhost:9100/";
  constructor(private http:HttpClient) { }

  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url+"tematicas");
  }

  //en el microservicio está como libros en el controller
  catalogo():Observable<Libro[]>{
    return this.http.get<Libro[]>(this.url+"libros");
  }

  buscarLibro(isbn:number):Observable<Libro>{
    return this.http.get<Libro>(this.url+"isbn");
  }

  altaLibros(libro:Libro):Observable<void>{
    return this.http.post<void>(this.url+"alta",libro);
  }
}
