import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import { PASSWORD, USUARIO } from '../custom_properties';

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
    let cadBase64=btoa(USUARIO+":"+PASSWORD);//usuario y password encriptados
    //añadimos la cabecera para la autenticación
    let heads=new HttpHeaders();
    //hay que reasignar a la misma variable para que el encabezado headers tenga lo que queremos
    //recordar el ejemplo de string a="hello"; a.concat("bye"); syso(a)=>hello
    heads=heads.set("Authorization","Basic "+cadBase64);
    //para poder enviarlo añadimos la propiedad headers cuyo valor es el headers que hemos creado
    return this.http.get<Libro>(this.url+"isbn?isbn="+isbn,{"headers":heads});
  }

  altaLibros(libro:Libro):Observable<void>{
    let cadBase64=btoa(USUARIO+":"+PASSWORD);
    //btoa es una función de JS incorporada a TS que sirve para codificar en base 64
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Basic "+cadBase64);
    //se pasa el headers como tercer parámetro
    //en las peticiones post, se pasan 2 parámetros
    return this.http.post<void>(this.url+"alta",libro,{"headers":heads});
  }
}
