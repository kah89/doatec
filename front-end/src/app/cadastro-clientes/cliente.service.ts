import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  
  constructor(private httpClient: HttpClient, private router: Router) {}


  adicionarCliente(firstName: string, lastName: string, email: string,  password: string) {
    const dadosCliente = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };

    this.httpClient.post<{ mensagem: string, id: string }>('http://localhost:3000/api/users/',dadosCliente).subscribe((dados) => {
      const cliente: Cliente = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      };
    });
  } 
}