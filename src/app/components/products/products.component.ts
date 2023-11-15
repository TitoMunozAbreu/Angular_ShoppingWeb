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
  title = `Men's clothing`
  
  constructor(private productService: ProductService){}
  
  ngOnInit(): void {
    this.findByCategory(`men's clothing`);
  }

  
  findByCategory(category:string) {
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


