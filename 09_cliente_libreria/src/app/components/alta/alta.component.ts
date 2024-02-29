import { Component } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibrosService } from '../../service/libros.service';

@Component({
  selector: 'app-alta',
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  libro:Libro;

  constructor(private librosService:LibrosService){}

  alta():void{
    this.librosService
    .altaLibros(this.libro)
    .subscribe();
  }

}
