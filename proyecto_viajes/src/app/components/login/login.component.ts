import { Component } from '@angular/core';
import { Cliente } from '../../model/Cliente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cliente:Cliente;
  clientes:Cliente[];

}
