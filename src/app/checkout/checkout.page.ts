import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cart, CartItem } from '../api/interface';
import { OrderService } from '../api/order.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  cart: Cart;
  constructor(
    private storage: StorageService,
    private orderService: OrderService,
    public alertController: AlertController,
    private router: Router
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
    
    return this.orderService.sendOrder(payload).subscribe(async (data) => {
      await this.storage.clearCart();
      await this.checkoutDone();
  
      this.router.navigate(['/'])
      console.log(data);
    });
  }
    
  async checkoutDone() {
    const alert = await this.alertController.create({
      cssClass: 'checkout-done-class',
      header: 'Đặt hàng thành công!',
      message: 'Shop sẽ liên hệ với bạn trong thời gian sớm nhất.',
      buttons: ['OK']
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
