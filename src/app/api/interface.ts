import { Product } from './product.service';

export interface BaseListResponse<T> {
  data: T[];
  error: any;
  isSuccess: boolean;
}

export interface Cart {
  fullName: string;
  data: CartItem[];
  address: string;
  height: number;
  weight: number;
  phone: string;
}

export interface CartItem {
  productObj: Product;
  quantity?: number;
  color?: string;
  size?: string;
  productName?: string;
}
