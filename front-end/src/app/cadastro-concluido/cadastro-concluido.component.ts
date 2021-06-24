import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-concluido',
  templateUrl: './cadastro-concluido.component.html',
  styleUrls: ['./cadastro-concluido.component.css']
})
export class CadastroConcluidoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.navegarParaLogin();
  }
  navegarParaLogin() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 3000);
  }
}
