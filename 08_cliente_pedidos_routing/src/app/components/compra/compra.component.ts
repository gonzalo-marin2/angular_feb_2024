import { Component, OnInit } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Producto } from '../../model/Producto';
import { PedidosService } from '../../service/pedidos.service';
import { ProductosService } from '../../service/productos.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit{
  pedido:Pedido;
  productos:Producto[];

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

}
