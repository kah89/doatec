import { Injectable } from '@angular/core';
import { Doacao } from './doacao.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import axios from 'axios'
import { CadastroService } from './../login/shared/cadastro.services'

@Injectable({ providedIn: 'root' })
export class DoacaoService {
  private doacoes: Doacao[] = [];
  private listaDoacoesAtualizada = new Subject<{ doacoes: Doacao[] }>();
  /*
    getDoacoes(): Doacao[] {
      return [...this.doacoes];
    }
  
    adicionarDoacao(item: string, descricao: string, dataDoacao: Date) {
      const doacao: Doacao = {
        item: item,
        descricao: descricao,
        dataDoacao: dataDoacao,
      };
      this.doacoes.push(doacao);
      this.listaDoacoesAtualizada.next([...this.doacoes]);
    }
  */
  getListaDeDoacoesAtualizadaObservable() {
    return this.listaDoacoesAtualizada.asObservable();
  }


  constructor(private httpClient: HttpClient, private router: Router) { }


  getDoacoes(): void {

    axios.get('http://localhost:3000/api/donations/', { headers: {Authorization: `Bearer ${localStorage.getItem('token')}` } })
      .then(resp => {
        const doacoes = resp.data.map(doacao => ({
          id: doacao.id,
          title: doacao.computer.title,
          description: doacao.computer.description,
          status: doacao.status

        }))
        this.doacoes = doacoes;
        this.listaDoacoesAtualizada.next({
          doacoes: [...this.doacoes]
          
        });
        console.log(doacoes)
      })
      
  }

  adicionarDoacao(id: number, title: string, description: string, status: number) {
    const dadosDoacao = {
      id: id,
      title: title,
      description: description,
      status: status
    };

    this.httpClient.post<{ mensagem: string, id: string }>('http://localhost:3000/api/donations/', dadosDoacao, { headers: { Authorization: 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjIyNTg3MzY2fQ.2_Syoe8avcvVgQ55kKxvPyW_pu-6sJsaxthsvdVhK8ElOpVa2cpfAfpCukOJyCaawFTLsG656mbPfpdayQvNgA' } }).subscribe((dados) => {
      const doacao: Doacao = {
        id: undefined,
        title: title,
        description: description,
        status: undefined
      };
    });
  }

  getListaDoacoesAtualizadaObservable() {
    return this.listaDoacoesAtualizada.asObservable();
  }
}