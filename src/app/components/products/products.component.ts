import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  products?: Product[]
  title?: string 
  
  constructor(private productService: ProductService,
              private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.findByCategory(params['category'])
        this.title = params['category']  
    })
  }

  
  findByCategory(category:string ) {
    //utilizamos el servicio para almacenar la lista de productos
    this.productService.findByCategory(category)
    .subscribe({
      next: value => {
        this.products = value    
        console.log(value)    
      },
      error: error => {console.log(error)}
    })
  }
  
  
  
}


