import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ModalidadesService } from '../modalidades.service';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent implements OnInit {
  investimentos;
  constructor(private userService: UserService,
    private modalidadeService: ModalidadesService) { }

  ngOnInit() {
    this.getInvestimentos();
  }

  getInvestimentos() {
    const id = this.userService.getInvestment();
    const result = this.modalidadeService.getById(id);
    this.investimentos = result;
    console.log(this.investimentos);
  }

}
