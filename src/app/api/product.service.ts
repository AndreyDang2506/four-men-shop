import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseListResponse } from './interface';

export interface Product {
  id: number;
  productName: string;
  image: string;
  price: number;
  quantity: number;
  social: string;
  categoryId: number;
  colorIds: string;
  brandIds: string;
  sizeIds: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productApi = 'https://api.4mencomestic.com/products/withInfo';

  public products: Product[];

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<BaseListResponse<Product>>(this.productApi);
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }
}
