import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

interface Product{
  id: string;
  title: string;
  images: string[];
  price: number}

@Component({
  selector: 'app-scroll',  
  imports: [NavbarComponent,HttpClientModule,ScrollingModule,CommonModule],  
  templateUrl: './scroll.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScrollComponent {
  products: Product[]=[];

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products').subscribe(data=> {
      this.products = data;
    })

  }

}
