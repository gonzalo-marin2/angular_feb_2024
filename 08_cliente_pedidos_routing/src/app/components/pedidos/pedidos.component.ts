import { Component, OnInit } from '@angular/core';
import { PedidosService } from '../../service/pedidos.service';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrl: './pedidos.component.css'
})
export class PedidosComponent implements OnInit {
  pedidos:Pedido[];

  //inyectamos el servicio, se pone private para que sea atributo y no variable local
  constructor(private pedidosService:PedidosService){}
  ngOnInit(): void {
    this.mostrarPedidos();
  }

  mostrarPedidos():void{
    this.pedidosService
    .pedidos()
    .subscribe(data=>this.pedidos=data);
  }

}
