import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
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
  constructor(private productService:ProductService, private activatedRoute:ActivatedRoute) {

   }

  //componentin doma yerleşmesi
  ngOnInit(): void {
    // params bana observable bir nesne döner ve onlara subscribe olmamız gerekir
    this.activatedRoute.params.subscribe(params=>{
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else{
        this.getProducts();
      }
    })

  }

  getProducts(){
    console.log("api request başladı")
    this.productService.getProducts().subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })

    console.log("method bitti")
  }

  getProductsByCategory(categoryId:number){
    console.log("api request başladı")
    this.productService.getProductsByCategoryId(categoryId).subscribe(response=>{
      this.products = response.data;
      this.dataLoaded = true;
    })

  }}
