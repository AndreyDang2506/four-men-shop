import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/api/interface';
import { StorageService } from 'src/app/services/storage.service';
import { Product } from '../../api/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product;

  constructor(private storage: StorageService) {}

  ngOnInit() {}

  async addToCart(product: Product) {
    console.log('addToCart');
    console.log(product);
    const cartItem: CartItem = {
      quantity: 1,
      productObj: product,
    };
    await this.storage.addCartItem(cartItem);
  }
}
