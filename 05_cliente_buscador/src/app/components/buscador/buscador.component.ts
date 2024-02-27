import { Component } from '@angular/core';
import { Resultado } from '../../model/Resultado';
import { BuscadorService } from '../../service/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  tematica:string;
  resultados:Resultado[];

  //inyectamos el servicio, se pone private para que sea atributo y no variable local
  constructor(private buscadorService:BuscadorService) {}

  buscar():void{
    this.buscadorService
    .buscarResultados(this.tematica)//devuelve un Observable<Resultado[]>
    .subscribe(data=>this.resultados=data);
    //los datos los guarda en resultados en una llamada asíncrona
    //se ejecuta cuando el resultado está disponible
  }

}
