import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/productResponseModel';

// bu bir servistir anlamına gelir
//
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = "https://localhost:44382/api/Products/getall";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    //gelen datayı productresponsemodele map ediceksin
    return this.httpClient
    .get<ProductResponseModel>(this.apiUrl)
    
  }

}
