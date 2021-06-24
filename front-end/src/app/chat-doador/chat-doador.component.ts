import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-chat-doador',
  templateUrl: './chat-doador.component.html',
  styleUrls: ['./chat-doador.component.css']
})
export class ChatDoadorComponent implements OnInit {
  formDoador;
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {

}
}
