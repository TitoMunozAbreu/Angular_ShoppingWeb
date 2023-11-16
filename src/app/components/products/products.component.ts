import { Component, OnInit } from '@angular/core';
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
  
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.findByCategory();
    this.title = this.productService.category
  }

  
  findByCategory() {
    //utilizamos el servicio para almacenar la lista de productos
    this.productService.findByCategory()
    .subscribe({
      next: value => {
        this.products = value    
        console.log(value)    
      },
      error: error => {console.log(error)}
    })
  }
  
  
  
}


