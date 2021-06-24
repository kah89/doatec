import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  searchProduct = new BehaviorSubject(null);
  investimentos = new BehaviorSubject(null);

  constructor() { }

  setInvestment(investment) {
    this.investimentos.next(investment)
  }

  setProduct(product) {
    this.searchProduct.next(product)
  }

  getProduct() {
    return this.searchProduct.getValue();
  }
  getInvestment() {
    return this.investimentos.getValue();
  }
}
