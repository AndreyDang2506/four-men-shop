import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/api/interface';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-checkout-item',
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss'],
})
export class CheckoutItemComponent implements OnInit {
  @Input() index: number;
  @Input() cartItem: CartItem;
  quantity?: number;
  color?: string;
  size?: string;
  productName?: string;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.quantity = this.cartItem.quantity;
    this.color = this.cartItem.color;
    this.size = this.cartItem.size;
    this.productName = this.cartItem.productName;
    console.log(this.cartItem);
  }

  handleChangeColor(ev) {
    this.color = ev.target.value;
    this.cartItem.color = ev.target.value;
    this.saveCartItem();
  }

  handleChangeSize(ev) {
    this.size = ev.target.value;
    this.cartItem.size = ev.target.value;
    this.saveCartItem();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity -= 1;
    }
    this.cartItem.quantity = this.quantity;
    this.saveCartItem();
  }

  increaseQuantity() {
    this.quantity += 1;
    this.cartItem.quantity = this.quantity;
    this.saveCartItem();
  }

  saveCartItem() {
    this.storage.updateCartItem(this.index, this.cartItem);
  }
}
