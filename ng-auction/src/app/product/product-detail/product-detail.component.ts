import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {

  @Input() product: Product;
}
