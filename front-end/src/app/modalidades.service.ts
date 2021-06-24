import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalidadesService {
  modalidade = [
    {
      "id": 1,
      "modalidade": "Tesouro SELIC 2025",
      "vencimento": "01/03/2025",
      "rentabilidade": "SELIC",
      "valorMinimo": 105.74,
      "valorInteiro": 10.574
    },
    {
      "id": 2,
      "modalidade": "Tesouro SELIC 2025",
      "vencimento": "01/03/2025",
      "rentabilidade": "SELIC",
      "valorMinimo": 105.74,
      "valorInteiro": 10.574
    },
    {
      "id": 3,
      "modalidade": "Tesouro SELIC 2025",
      "vencimento": "01/03/2025",
      "rentabilidade": "SELIC",
      "valorMinimo": 105.74,
      "valorInteiro": 10.574
    },
    {
      "id": 4,
      "modalidade": "Tesouro SELIC 2025",
      "vencimento": "01/03/2025",
      "rentabilidade": "SELIC",
      "valorMinimo": 105.74,
      "valorInteiro": 10.574
    },  
  ];
  constructor() { }

  getModalidade() {
    return this.modalidade;
  }
  getById(id) {
    const item = this.modalidade.find(item => item.id === id);
    return item;
  }
}
