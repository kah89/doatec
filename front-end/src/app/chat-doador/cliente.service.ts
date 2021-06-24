import { Injectable } from '@angular/core';
import { Cliente } from './cliente.model';
import { Subject } from 'rxjs';
//import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ClienteService {
  private clientes: Cliente[] = [];
  private listaClientesAtualizada = new Subject<Cliente[]>();

//para conexão com back:
// substituir este codigo pelo comentado

  getClientes(): Cliente[] {
    return [...this.clientes];
  }

  adicionarCliente(nome: string, nasc: Date, fone: string, email: string, endereco: string, senha: number) {
    const cliente: Cliente = {
      nome: nome,
      nasc: nasc,
      email: email,
      fone: fone,
      endereco: endereco,
      senha: senha,
    };
    this.clientes.push(cliente);
    this.listaClientesAtualizada.next([...this.clientes]);
  } 

  getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }
}

    /*constructor(private httpClient: HttpClient) {}

  getClientes(): void {
    this.httpClient
      .get<{ mensagem: string; clientes: Cliente[] }>(
        'http://localhost:3000/api/clientes'
      )
      .subscribe((dados) => {
        this.clientes = dados.clientes;
        this.listaClientesAtualizada.next([...this.clientes]);
      });
  }

  adicionarCliente(nome: string, nasc: Date, fone: string, email: string, endereco: string, senha: number) {
    const cliente: Cliente = {
      nome: nome,
      nasc: nasc,
      email: email,
      fone: fone,
      endereco: endereco,
      senha: senha,
    };
    this.httpClient
      .post<{ mensagem: string }>('http://localhost:3000/api/clientes', cliente)
      .subscribe((dados) => {
        console.log(dados.mensagem);
        this.clientes.push(cliente);
        this.listaClientesAtualizada.next([...this.clientes]);
      });
  } 
  
    getListaDeClientesAtualizadaObservable() {
    return this.listaClientesAtualizada.asObservable();
  }
}
*/


