import { Component, OnInit } from '@angular/core';
import {CdkTableModule} from '@angular/cdk/table';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Product } from '../../models/product.model';
import { DataSourceProduct } from './data-source';
import { BtnComponent } from '../../components/btn/btn.component';

@Component({
  selector: 'app-table',
  imports: [CdkTableModule,NavbarComponent, HttpClientModule, BtnComponent],
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit{  
  columns: string[] = ['#No', 'Name', 'price', 'cover', 'actions'];
  total= 0;
  dataSource = new DataSourceProduct();
  products: Product[] = [];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
      .subscribe(data=> {
      this.dataSource.init(data);
      this.total = this.dataSource.getTotal();
    })

  }

  update(product: Product) {
    this.dataSource.update(product.id, { price: 20 });
  }

}
