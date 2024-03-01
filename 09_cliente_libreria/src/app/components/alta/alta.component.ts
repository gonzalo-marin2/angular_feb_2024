import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent implements OnInit {
  libro:Libro;
  tematicas:string[];

  constructor(private librosService:LibrosService, private router:Router){}

  ngOnInit(): void {
    this.mostrarTematicas();
    this.libro=new Libro();
  }

  alta():void{
    this.librosService
    .altaLibros(this.libro)
    .subscribe(data=>this.router.navigate(["/libros"]));//cuando demos de alta un libro, nos envía al catálogo
  }

  mostrarTematicas():void{
    this.librosService
    .tematicas()
    .subscribe(data=>this.tematicas=data);
  }

}
