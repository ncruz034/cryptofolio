import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from '../../../currency.service';
import { Router } from '@angular/router';
//import { MatTableDataSource } from '@angular/material';
//import { Currency } from '../../../currency.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  createForm: FormGroup;

  constructor(private currencyService: CurrencyService, private fb:FormBuilder, private router:Router) {
    this.createForm = this.fb.group({
      date:['',Validators.required],
      pair: '',
      type: '', 
      side: '',
      price:'',
      balance:'',
      priceInUSD:'',
      balanceInBTC:'',
      symbol:'',
      priceOfBTC:''
    });
    }

    addCurrency(date,pair,type,side,price,balance,priceInUSD,balanceInBTC,symbol,priceOfBTC){
      //TODO:
      //Calculate the price in USD base on data
      let priceUsd = balance / priceOfBTC;
      this.currencyService.addCurrency(date,pair,type,side,price,balance,priceInUSD,balanceInBTC,symbol,priceOfBTC).subscribe(()=>{
        this.router.navigate(['/list']);
      });
    }
  ngOnInit() {
  }

}
