import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, NgForm, Validators } from '@angular/forms';
import { Doacao } from '../doacao.model';
import { DoacaoService } from '../doacao.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-cadastro-doacao',
  templateUrl: './cadastro-doacao.component.html',
  styleUrls: ['./cadastro-doacao.component.css']
})

export class CadastroDoacaoComponent implements OnInit {
  private modo: string = "criar";
  private doacao: Doacao;
  form: FormGroup;
  isDisplayed = true;
  name = "Maria";

  showMe() {
    if(this.isDisplayed) {
        this.isDisplayed = false;
    } else {
        this.isDisplayed = true;
    }
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl (null, {
      validators: [Validators.required, Validators.minLength(3)]
      }),
      description: new FormControl (null, {
      validators: [Validators.required]
      })
  })
  }

  constructor(public doacaoService: DoacaoService, public route: ActivatedRoute, private router:Router) {}

  // onAdicionarDoacao() {
  //   if (this.form.invalid) {
  //     return;
  //   }
  //   if (this.modo === "criar") {
  //     this.doacaoService.adicionarDoacao(
  //       this.form.value.title,
  //       this.form.value.description,
  //     );
  //   }
  //   this.form.reset();
  // }
  // gotoChat() {
  //   this.router.navigate(['chat-doador']);
  // }

}
