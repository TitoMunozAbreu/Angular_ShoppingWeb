import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
  imageLogo:string = 'assets/images/papaya-logo.jpeg';

  constructor(private productService: ProductService){}

  onUpdateCategory(category: string){
    if(category === 'mens'){
      this.productService.updateCategory(`men's clothing`);
    } else if(category === 'womens'){
      this.productService.updateCategory(`women's clothing`);
    }else {
      this.productService.updateCategory(category);
    }
    
   
  }

  
  
}
