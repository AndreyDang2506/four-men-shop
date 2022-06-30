import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseListResponse } from './interface';

export interface Order {
  fullName: string;
  address: string;
  phone: string;
  infoOrderConfirm: {
    productName: string;
    height: string;
    weight: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  sendOrderApi = 'https://api.4mencomestic.com/userSource/orderFromWebsite';

  public order: Order[];

  constructor(private http: HttpClient) {}

  public sendOrder(order: Order) {
    return this.http.post<BaseListResponse<Order>>(this.sendOrderApi, order);
  }
}
