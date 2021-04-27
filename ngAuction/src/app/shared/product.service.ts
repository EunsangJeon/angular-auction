import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor() {
  }

  getProducts(): Product[] {
    return products;
  }

  getProductById(productId: number): Product {
    const product = products.find(p => p.id === productId);
    if (product) {
      return product;
    }
    else {
      return {
        id: -1,
        title: 'N/A',
        price: 0.0,
        rating: 0.0,
        description: 'N/A',
        categories: ['N/A'],
      };
    }
  }
}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public description: string,
    public categories: string[],
  ) {
  }
}

const products: Product[] = [
  {
    id: 0,
    title: 'First Product',
    price: 24.99,
    rating: 4.3,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware'],
  },
  {
    id: 1,
    title: 'Second Product',
    price: 64.99,
    rating: 3.5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books'],
  },
  {
    id: 2,
    title: 'Third Product',
    price: 74.99,
    rating: 4.2,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics'],
  },
  {
    id: 3,
    title: 'Fourth Product',
    price: 84.99,
    rating: 3.9,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['hardware'],
  },
  {
    id: 4,
    title: 'Fifth Product',
    price: 94.99,
    rating: 5,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['electronics', 'hardware'],
  },
  {
    id: 5,
    title: 'Sixth Product',
    price: 54.99,
    rating: 4.6,
    description: 'This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    categories: ['books'],
  },
];
