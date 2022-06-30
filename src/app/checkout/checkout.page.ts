import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../api/interface';
import { OrderService } from '../api/order.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cart: Cart;
  constructor(
    private storage: StorageService,
    private orderService: OrderService
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // Load the data
    this.storage.getCart().then((data) => {
      console.log(data);
      this.cart = data;
    });
  }

  async sendOrder() {
    const currentCart = await this.storage.getCart();
    console.log(currentCart);
    const productName = currentCart.data.reduce((acc, item: CartItem) => {
      const currentProduct = `${acc} + ${item.quantity} ${
        item.productObj.productName
      }${item.color ? ', ' + item.color + ', ' : ''} ${
        item.size ? item.size : ''
      }`;
      return `${currentProduct}`;
    }, '');

    const payload = {
      fullName: currentCart.fullName,
      address: currentCart.address,
      phone: currentCart.phone,
      infoOrderConfirm: {
        productName,
        height: currentCart.height,
        weight: currentCart.weight,
      },
    };

    console.log('payload=============');
    console.log(payload);

    return this.orderService.sendOrder(payload).subscribe((data) => {
      console.log(data);
    });
  }
}
