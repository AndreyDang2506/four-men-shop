import { Product } from './product.service';

export interface BaseListResponse<T> {
  data: T[];
  error: any;
  isSuccess: boolean;
}
export interface CartInformation {
  fullname: string;
  phone: string;
  address: string;
  height: number;
  weight: number;
}

export interface CartItem {
  productObj: Product;
  quantity?: number;
  color?: string;
  size?: string;
  productName?: string;
}

export interface Cart extends CartInformation  {
  data: CartItem[];
}