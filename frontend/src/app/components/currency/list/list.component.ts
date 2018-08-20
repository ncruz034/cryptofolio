import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../currency.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Currency } from '../../../currency.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  currencies: Currency[];
  displayedColumns = ['symbol','date','pair','price','balance','priceInUSD','priceInBTC','actions'];

  constructor(private currencyService : CurrencyService, private router:Router) { }

  ngOnInit() {
    this.fetchCurrencies();
  }
  fetchCurrencies(){
    this.currencyService.getCurrencies().subscribe(
      (data: Currency[])=>{
        this.currencies = data;
        console.log('Data requested...');
        console.log(this.currencies);
      });
  }
  editCurrency(id){
    this.router.navigate([`/edit/${id}`]);
  }
  deleteCurrency(id){
    this.currencyService.deleteCurrency(id).subscribe(()=>{
      this.fetchCurrencies();//Called to update table after currency gets deleted.
    });
  }
}
