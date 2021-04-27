import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {

  product: Product = {
    id: -1,
    title: 'N/A',
    price: 0.0,
    rating: 0.0,
    description: 'N/A',
    categories: ['N/A'],
  };

  constructor(private route: ActivatedRoute, private productService: ProductService) {
  }

  ngOnInit(): void {
    const prodId: number = parseInt(this.route.snapshot.params.productId, 10);
    this.product = this.productService.getProductById(prodId);
  }
}
