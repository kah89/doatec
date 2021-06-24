import { Component, OnInit } from '@angular/core';
import { ModalidadesService } from '../modalidades.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home-logada',
  templateUrl: './home-logada.component.html',
  styleUrls: ['./home-logada.component.css']
})
export class HomeLogadaComponent implements OnInit {
  getCadastro;
  nameCliente;
  modalidade;
  constructor(
    private modalidadeService: ModalidadesService,
    private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.getCadastro = localStorage.getItem('cadastro');
    this.nameCliente = this.getCadastro['firstName'];
    console.log(this.nameCliente);

    this.modalidade = this.modalidadeService.getModalidade();

    console.log(this.modalidade);
  }

  investment(id) {
    this.userService.setProduct(id);
    this.router.navigate(['painel-investir']);
  }

}
