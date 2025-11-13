import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';
import { NgClass } from '@angular/common';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-table',
  imports: [CdkTableModule, NavbarComponent, HttpClientModule, BtnComponent, NgClass, ReactiveFormsModule,],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{  
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total= 0;
  dataSource = new DataSourceProduct();
  products: Product[] = [];
  input = new FormControl('', {nonNullable: true})

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data=> {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })

    this.input.valueChanges
    .pipe(
      debounceTime(300))
    .subscribe(value=> {
      this.dataSource.find(value)
    })
  }  

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

}
