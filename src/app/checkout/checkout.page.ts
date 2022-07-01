import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cart, CartItem } from '../api/interface';
import { OrderService } from '../api/order.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';
import provinceList from '../address/tinh_tp.json';
import districtList from '../address/quan_huyen.json';
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

  async ngOnInit() {
    // Load the data
  }

  async ionViewWillEnter() {
    this.cart = await this.storage.getCart();
  }

  async sendOrder() {
    const {
      data,
      fullName,
      address,
      province,
      district,
      phone,
      height,
      weight,
    } = await this.storage.getCart();

    const productName = data.reduce((acc, item: CartItem) => {
      const currentProduct = `${acc} + ${item.quantity} ${
        item.productObj.productName
      }${item.color ? ', ' + item.color + ', ' : ''} ${
        item.size ? item.size : ''
      }`;
      return `${currentProduct}`;
    }, '');

    const newAddress = `${address}, ${districtList[district].name}, ${provinceList[province].name}`;

    const payload = {
      fullName,
      address: newAddress,
      phone,
      infoOrderConfirm: {
        productName,
        height,
        weight,
      },
    };

    return this.orderService.sendOrder(payload).subscribe(async (response) => {
      await this.storage.clearCart();
      await this.checkoutDone();

      this.router.navigate(['/']);
      console.log(response);
    });
  }

  async checkoutDone() {
    const alert = await this.alertController.create({
      cssClass: 'checkout-done-class',
      header: 'Đặt hàng thành công!',
      message: 'Shop sẽ liên hệ với bạn trong thời gian sớm nhất.',
      buttons: ['OK'],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
