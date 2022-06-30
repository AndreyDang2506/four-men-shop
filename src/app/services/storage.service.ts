import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Cart, CartItem } from '../api/interface';
import { STORAGE_CART } from '../constants/cart.constant';

@Injectable()
export class StorageService {
  private localStorage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.localStorage = storage;
  }

  public async getCart(): Promise<any> {
    const cart = await this.get(STORAGE_CART);
    if (cart == null) {
      return {
        fullName: 'Nguyen Huu Ta',
        data: new Array<CartItem>(),
        address: '141 Chua Boc, Linh Nam, Hoang Mai, Ha Noi',
        height: 165,
        weight: 65,
        phone: '0989912762',
      };
    }
    return cart;
  }

  public async addCartItem(cartItem: CartItem) {
    const currentCartObj = await this.getCart();
    currentCartObj.data.push(cartItem);

    return this.set(STORAGE_CART, currentCartObj);
  }

  public async removeCartItem(index: number): Promise<void> {
    const currentCartObj = await this.getCart();
    currentCartObj?.data?.splice(index, 1);
    return this.set(STORAGE_CART, currentCartObj);
  }

  public async updateCartItem(index: number, newCartItem: CartItem) {
    const currentCartObj = await this.getCart();
    currentCartObj.data[index] = newCartItem;
    return this.set(STORAGE_CART, currentCartObj);
  }

  // private func
  private async set(key: string, value: any) {
    console.log('value=========');
    console.log(value);
    const jsonValue = JSON.stringify(value);
    await this.localStorage?.set(key, jsonValue);
  }

  private async get(key: string) {
    const valueJson = await this.localStorage?.get(key);
    if (valueJson) {
      return JSON.parse(valueJson);
    }
    return null;
  }
}
