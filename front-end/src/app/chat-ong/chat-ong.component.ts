import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-ong',
  templateUrl: './chat-ong.component.html',
  styleUrls: ['./chat-ong.component.css']
})
export class ChatOngComponent implements OnInit {
  formOng: FormGroup;
  valoresForm: Object;
  conversao;
  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {

}
}
