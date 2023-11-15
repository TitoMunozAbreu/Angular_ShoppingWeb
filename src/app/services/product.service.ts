import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

const   baseUrl = 'https://fakestoreapi.com/products/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  findByCategory(category:string) : Observable<Product[]>{
    return this.http.get<Product[]>(`${baseUrl}/${category}`);
  }

}
