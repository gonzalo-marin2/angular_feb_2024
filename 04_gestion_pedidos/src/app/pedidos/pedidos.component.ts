import { Component } from '@angular/core';
import { Pedido } from '../model/Pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent {
  pedidos:Pedido[]=[];
  pedido:Pedido;
  tablaVisible:boolean=false;
  constructor(){
    this.pedido=new Pedido();
  }
  grabarPedido():void{
    this.pedidos.push(this.pedido);
    //cada vez que guardamos creamos un nuevo objeto
    this.pedido=new Pedido();
    //para ver en consola los pedidos
    console.log(this.pedidos);
  }
  verPedidos():void{
    //cada vez que damos a ver pedidos, se muestra o se oculta
    this.tablaVisible=!this.tablaVisible;
  }
}
