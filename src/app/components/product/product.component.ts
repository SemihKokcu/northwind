import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []
  dataLoaded = false;
  //constructorun amacı ProdcutComponenti bellete oluşturmaktır: new lemek
  
  //inejct et => productcomponent te httpclient private alıyoruz sadece burada kullanılması için
  constructor(private productService:ProductService) {

   }

  //componentin doma yerleşmesi
  ngOnInit(): void {
    this.getProducts();

  }

  getProducts(){

    console.log("api request başladı")
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })

    console.log("method bitti")
  }

}
