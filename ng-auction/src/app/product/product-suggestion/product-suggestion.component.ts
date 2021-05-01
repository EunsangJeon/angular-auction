import { Component, Input } from '@angular/core';
import { Product } from '../../shared/services';
import { Observable } from 'rxjs';
import { MediaObserver } from '@angular/flex-layout';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'nga-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent {

  @Input() products: Product[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 2 ],
    [ 'sm', 3 ],
    [ 'md', 5 ],
    [ 'lg', 2 ],
    [ 'xl', 3 ],
  ]);

  constructor(private media: MediaObserver) {
    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => this.breakpointsToColumnsNumber.get(mc[0].mqAlias)),
        startWith(3)
      );
  }
}
