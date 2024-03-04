import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Libro } from '../model/Libro';
import { Observable } from 'rxjs';
import { GRANT_TYPE, ID_CLIENTE, PASSWORD, URL_AUTH, USUARIO } from '../custom_properties';
import { TokenResponse } from '../model/TokenResponse';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  token:string="";
  url="http://localhost:9100/";
  constructor(private http:HttpClient) {
    this.setToken();
  }

  tematicas():Observable<string[]>{
    return this.http.get<string[]>(this.url+"tematicas");
  }

  //en el microservicio está como libros en el controller
  catalogo():Observable<Libro[]>{
    console.log("token"+this.token);
    if(this.token==""){
      alert("Token aún no disponible");//muestra este mensaje hasta que el token está disponible
      return new Observable<Libro[]>();

    }
    //añadir encabezado Authorization
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    return this.http.get<Libro[]>(this.url+"libros",{"headers":heads});
  }

  buscarLibro(isbn:number):Observable<Libro>{
    //en este método no necesitamos autenticación
    return this.http.get<Libro>(this.url+"isbn?isbn="+isbn);
  }

  altaLibros(libro:Libro):Observable<void>{
    //se pasa el headers como tercer parámetro
    //en las peticiones post, se pasan 2 parámetros
    let heads=new HttpHeaders();
    heads=heads.set("Authorization","Bearer "+this.token);
    return this.http.post<void>(this.url+"alta",libro,{"headers":heads});
  }

  //comunicacion con keycloak para obtener el token y hacer la petición post
  //va a por el token, y cuando esté, lo guarda en la variable token
  setToken():void{
    let heads=new HttpHeaders();
    //da igual comillas simples o dobles
    heads=heads.set('Content-Type','application/x-www-form-urlencoded');

    let params=new HttpParams();
    params=params.set("client_id",ID_CLIENTE);
    params=params.set("username",USUARIO);
    params=params.set("password",PASSWORD);
    params=params.set("grant_type",GRANT_TYPE);
    let url=URL_AUTH;

    //la respuesta es un token_response, hay que guardar la variable access_token
    //como devuelve un observable, hay que suscribirse
    //this.http.post<TokenResponse>(url,{"headers":heads,"params":params}).subscribe(data=>this.token=data.access_token);
    //params lo pasamos como segundomparámetro
    this.http.post<TokenResponse>(url,params,{"headers":heads}).subscribe(data=>this.token=data.access_token);
   }

}
