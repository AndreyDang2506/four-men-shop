import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { Cart, CartItem } from '../api/interface';
import { STORAGE_CART } from '../constants/cart.constant';

@Injectable()
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  private async set(key: string, value: any) {
    console.log('value=========')
    console.log(value)
    const jsonValue = JSON.stringify(value);
    await this._storage?.set(key, jsonValue);
  }

  private async get(key: string) {
    const valueJson = await this._storage?.get(key);
    if(valueJson) {
      return JSON.parse(valueJson);
    }
    return null;
  }

  public getCart(): Promise<Cart|null> {
    return this.get(STORAGE_CART);
  }

  public async addCartItem(cartItem: CartItem) {
    let currentCartObj = await this.getCart();
    if(currentCartObj == null) {
      let data = new Map<number, CartItem>();
      data.set(cartItem.productObj.id, cartItem)
      currentCartObj = {
        data
      }
    } else {
      currentCartObj.data.set(cartItem.productObj.id, cartItem);
    }

    return this.set(STORAGE_CART, currentCartObj);
  }

  public async removeCartItem(productId: number): Promise<void> {
    let currentCartObj = await this.getCart();
    currentCartObj.data.delete(productId);
    return this.set(STORAGE_CART, currentCartObj);
  }
}