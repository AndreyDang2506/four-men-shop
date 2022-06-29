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
  productApi = 'https://api.4mencomestic.com/products';

  public products: Product[] = [
    {
      id: 2,
      productName: 'DR.ACNE : Xóa Mụn Chuẩn Y Khoa',
      image: 'https://4men.s3.ap-southeast-1.amazonaws.com/Anh%201.png',
      price: 199000,
      quantity: 100,
      social: null,
      categoryId: 1,
      colorIds: null,
      brandIds: null,
      sizeIds: null,
      createdAt: '2021-12-08T09:56:22.989Z',
      updatedAt: '2022-05-18T16:33:06.298Z',
    },
    {
      id: 3,
      productName: 'DR.WHITE : Sạch Thâm Từ Thiên Nhiên',
      image: 'https://4men.s3.ap-southeast-1.amazonaws.com/Anh%202.png',
      price: 399000,
      quantity: 100,
      social: null,
      categoryId: 1,
      colorIds: null,
      brandIds: null,
      sizeIds: null,
      createdAt: '2021-12-08T09:57:57.463Z',
      updatedAt: '2022-05-18T16:33:06.428Z',
    },
    {
      id: 10,
      productName: 'Giầy',
      image: '',
      price: 299000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: null,
      brandIds: '[3, 2, 1]',
      sizeIds: '[20, 19, 18, 17, 16, 15, 14, 13,12,11]',
      createdAt: '2022-05-18T17:43:34.750Z',
      updatedAt: '2022-05-20T10:45:42.371Z',
    },
    {
      id: 11,
      productName: 'Áo trơn',
      image: '',
      price: 99000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: '[7, 6, 3, 2]',
      brandIds: null,
      sizeIds: '[24, 23, 22, 21]',
      createdAt: '2022-05-18T17:44:04.652Z',
      updatedAt: '2022-06-10T02:59:58.951Z',
    },
    {
      id: 12,
      productName: 'Quần Baggy',
      image: '',
      price: 179000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: '[2, 1]',
      brandIds: null,
      sizeIds: '[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
      createdAt: '2022-05-18T17:44:53.979Z',
      updatedAt: '2022-05-18T18:00:04.953Z',
    },
    {
      id: 14,
      productName: 'Quần Âu',
      image: '',
      price: 129000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: '[8, 2]',
      brandIds: null,
      sizeIds: '[9, 8, 7, 6, 5, 4, 3]',
      createdAt: '2022-05-31T03:37:05.860Z',
      updatedAt: '2022-06-01T03:18:41.562Z',
    },
    {
      id: 15,
      productName: 'Rách RT2',
      image: '',
      price: 149000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: '[2, 1]',
      brandIds: null,
      sizeIds: '[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
      createdAt: '2022-06-10T03:07:45.419Z',
      updatedAt: '2022-06-10T03:58:51.684Z',
    },
    {
      id: 16,
      productName: 'Rách R2',
      image: '',
      price: 149000,
      quantity: 0,
      social: null,
      categoryId: 2,
      colorIds: '[2, 1]',
      brandIds: null,
      sizeIds: '[12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]',
      createdAt: '2022-06-10T03:08:17.387Z',
      updatedAt: '2022-06-10T03:58:51.554Z',
    },
  ];

  constructor(private http: HttpClient) {}

  public getProducts() {
    return this.http.get<BaseListResponse<Product>>(this.productApi);
  }

  public getProductById(id: number): Product {
    return this.products[id];
  }
}
