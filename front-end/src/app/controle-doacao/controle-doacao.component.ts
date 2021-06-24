import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import * as Typed from 'typed.js';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-controle-doacao',
  templateUrl: './controle-doacao.component.html',
  styleUrls: ['./controle-doacao.component.css']
})

export class ControleDoacaoComponent implements OnInit  {
  constructor(private router: Router) {}

  displayedColumns = ['cod', 'doador', 'status', 'data_ret'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  gotoChatOng() {
    this.router.navigate(['chat-ong']);
  }

  ngOnInit() {}

}

export interface Element {
  cod: number;
  doador: string;
  status: string;
  data_ret: string;
}

const ELEMENT_DATA: Element[] = [
  {cod: 1, doador: 'Maria', status: 'Disponível', data_ret: '01/01/2021'},
  {cod: 2, doador: 'João', status: 'Declinado', data_ret: '01/01/2021'},
  {cod: 3, doador: 'Andressa', status: 'Retirado', data_ret: '01/01/2021'},
  {cod: 4, doador: 'Rogerio', status: 'Doado', data_ret: '01/01/2021'},
  {cod: 5, doador: 'Karina', status: 'Disponível', data_ret: '01/01/2021'},
  {cod: 6, doador: 'Karen', status: 'Disponível', data_ret: '01/01/2021'},
  {cod: 7, doador: 'Gabriel', status: 'Doado', data_ret: '01/01/2021'},
  {cod: 8, doador: 'Eduardo', status: 'Declinado', data_ret: '01/01/2021'},
  {cod: 9, doador: 'Clara', status: 'Declinado', data_ret: '01/01/2021'},
  {cod: 10, doador: 'Fabiana', status: 'Disponível', data_ret: '01/01/2021'},
];