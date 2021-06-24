import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-negado',
  templateUrl: './acesso-negado.component.html',
  styleUrls: ['./acesso-negado.component.css']
})
export class AcessoNegadoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navegarParaCadastro() {
    this.router.navigate(['cadastro-clientes']);
  }
}
