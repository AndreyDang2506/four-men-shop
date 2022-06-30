import { Product } from "./product.service";

export interface BaseListResponse<T> {
  data: T[];
  error: any;
  isSuccess: boolean;
}

export interface Cart {
  data: Map<number, CartItem>
}

export interface CartItem {
  productObj: Product;
  quantity: number;
  colorId: number;
}