import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  uri = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getCurrencies(){
    return this.http.get(`${this.uri}/currencies`);
  }
  getCurrencyById(id){
    return this.http.get(`${this.uri}/currencies/${id}`);
  }
  addCurrency(date, pair,type,side,price,balance,priceInUSD,balanceInBTC,symbol,priceOfBTC){
    const currency = {
      date:date, 
      pair:pair,
      type:type,
      side:side,
      price:price,
      balance:balance,
      priceInUSD:priceInUSD,
      balanceInBTC:balanceInBTC,
      symbol:symbol,
      priceOfBTC:priceOfBTC
    };
    return this.http.post(`${this.uri}/currencies/add`,currency);
  }
  updateCurrency(id, date, pair,type,side,price,balance,priceInUSD,balanceInBTC,symbol,priceOfBTC){
    const currency = {
      date:date, 
      pair:pair,
      type:type,
      side:side,
      price:price,
      balance:balance,
      priceInUSD:priceInUSD,
      balanceInBTC:balanceInBTC,
      symbol:symbol,
      priceOfBTC:priceOfBTC
    };
    return this.http.post(`${this.uri}/currencies/update${id}`,currency);
  }

  deleteCurrency(id){
    return this.http.delete(`${this.uri}/currencies/delete/${id}`);
  }
}
