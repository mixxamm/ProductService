import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService { 
   constructor() {}

   getAllProducts(): Product[] {
      let producten: Product[] = [];
      producten.push(new Product("Product 1", "Merk 1", "Beschrijving 1", 10));
      producten.push(new Product("Product 2", "Merk 2", "Beschrijving 2", 200));
      return producten;
    }
}
