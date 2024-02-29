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
export class PedidosComponent implements OnInit{
  pedido:Pedido;
  pedidos:Pedido[];
  productos:Producto[];

  //inyectamos el servicio, se pone private para que sea atributo y no variable local
  constructor(private pedidosService:PedidosService,
              private productosService:ProductosService){}

  //para no poner código en el constructor, implementamos la clase OnInit(cf línea 12)
  //en su método codificamos lo que necesitemos
  //se ejecuta cuando el componente está listo para su utilización
  ngOnInit(): void {
    this.pedido=new Pedido();
    this.mostrarProductos();//para cargar productos desde el pricipio
  }

  mostrarProductos():void{
    this.productosService
    .productos()
    .subscribe(data=>this.productos=data);
  }

  alta():void{
    this.pedidosService
    .alta(this.pedido)
    .subscribe(data=>this.mostrarProductos());//no recibe resultados
    //pero carga de nuevo los productos una vez que ha dado de alta un pedido
  }

  mostrarPedidos():void{
    this.pedidosService
    .pedidos()
    .subscribe(data=>this.pedidos=data);
  }

}
