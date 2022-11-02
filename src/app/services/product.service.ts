import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { ListResponseModel } from '../models/ListResponseModel';

// bu bir servistir anlamına gelir
//
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44382/api";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{

    //gelen datayı productresponsemodele map ediceksin
    let newPath = this.apiUrl+"/products/getall";
    return this.httpClient
    .get<ListResponseModel<Product>>(newPath)

  }

  getProductsByCategoryId(categoryId:number):Observable<ListResponseModel<Product>>{

    let newPath = this.apiUrl+"/products/getbycategory?categoryId="+categoryId;
    return this.httpClient.
    get<ListResponseModel<Product>>(newPath);
  }

}
