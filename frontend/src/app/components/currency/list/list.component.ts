import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../../currency.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private currencyService : CurrencyService) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe((currency)=>{
      console.log(currency);
    })
  }

}
