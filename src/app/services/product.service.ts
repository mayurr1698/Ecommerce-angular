import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../common/product';
import { GetResponse } from '../models/get-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl ="http://localhost:8080/api"

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl+`/products?size=100`).pipe(
      map(response => response._embedded.products)
    )
  }
  // getImagesForProduct(): Observable<any>{
  //   return this.httpClient.get<GetResponse>(this.baseUrl+`/productImages/search`).pipe(
  //     map(response => response._embedded.productImages)
  //   )
  // }

}
