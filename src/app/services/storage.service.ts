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
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public get(key: string) {
    return this._storage?.get(key);
  }

  public async getCart(): Promise<Cart|null> {
    const cartJson = await this._storage?.get(STORAGE_CART);
    if(cartJson) {
      return JSON.parse(cartJson);
    }
    return null;
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
}