import { Pais } from '../../model/Pais';
import { PaisesService } from './../../service/paises.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continenteSel:string;
  continentes:string[];
  paises:Pais[];

  //inyectamos el servicio, se pone private para que sea atributo y no variable local
  constructor(private paisesService:PaisesService){
    //se cargan los continentes desde el principio
    this.cargaContinentes();
  }

  cargaContinentes():void{
    this.paisesService
    .continentes()
    .subscribe(data=>this.continentes=data);
  }

  cargaPaisesContinente():void{
    this.paisesService
    .paisesPorContinente(this.continenteSel)
    .subscribe(data=>this.paises=data);
  }

}
