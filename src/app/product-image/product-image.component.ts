import { Component, Input, HostBinding, OnInit } from '@angular/core';
import { Product } from './../product.model';

@Component({
  selector: 'app-product-image',
  template: `
  <img class="img-responsive" [src]="product.imageUrl">
  `
})
export class ProductImageComponent implements OnInit {
  
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';

  ngOnInit(): void { }

}