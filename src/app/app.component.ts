import { Component, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  products: Product[];
  title = 'inventory-app';

  constructor() {

    this.products = [
      new Product(
        'NICEHAT',
        'A nice black hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99),
      new Product(
        'MYSHOES',
        'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product
        ('NEATOJACKET',
          'Blue Jacket',
          '/assets/images/products/blue-jacket.jpg',
          ['Women', 'Apparel', 'Jackets & Vests'],
          238.99),
      new Product
        ('SOMEBOOTS',
          'BLACK WHITING BOOTS',
          '/assets/image/products/1.jpg',
          ['Boys', 'Boots', 'Britain'],
          999.99)
    ];
  }

  productWasSelected(product: Product): void {
    console.log(`Is clicked: `, product);
  }
}