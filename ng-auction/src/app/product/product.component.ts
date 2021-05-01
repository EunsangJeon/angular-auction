import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductService } from '../shared/services';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'nga-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {

  product$: Observable<Product>;
  suggestedProducts$: Observable<Product[]>;
  selectedProductId$: Observable<number>;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    this.selectedProductId$ = this.route.paramMap
      .pipe(
        map(params => parseInt(params.get('productId') || '', 10)),
        filter(productId => !!productId));

    this.product$ = this.selectedProductId$
      .pipe(
        switchMap(productId => this.productService.getById(productId))
      );

    this.suggestedProducts$ = this.selectedProductId$
      .pipe(
        switchMap(productId => this.productService.getAll().pipe(
          map(products => products.filter(product => product.id !== productId))
        ))
      );
  }
}
