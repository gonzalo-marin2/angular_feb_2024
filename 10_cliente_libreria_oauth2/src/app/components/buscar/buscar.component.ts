import { Component, OnInit } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})

export class BuscarComponent implements OnInit {
  isbn:number;
  libro:Libro;

  constructor(private librosService:LibrosService){}
  ngOnInit(): void {
    this.libro=new Libro();
  }

  buscarLibro():void{
    this.librosService
    .buscarLibro(this.isbn)
    .subscribe(data=>this.libro=data);
  }

}
