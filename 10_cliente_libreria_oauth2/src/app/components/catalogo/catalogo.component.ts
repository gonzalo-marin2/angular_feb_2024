import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../../service/libros.service';
import { Libro } from '../../model/Libro';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  libros:Libro[];
  constructor(private librosService:LibrosService){}
  ngOnInit(): void {
    this.mostrarLibros();
  }

  mostrarLibros():void{
    this.librosService
    .catalogo()
    .subscribe(data=>this.libros=data);
  }
}
