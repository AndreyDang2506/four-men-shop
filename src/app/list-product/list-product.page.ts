import { Component, OnInit } from '@angular/core';
import { BaseListResponse, Cart } from '../api/interface';
import { Product, ProductService } from '../api/product.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage implements OnInit {
  products: Product[];
  isShowCart: boolean;

  constructor(private data: ProductService, private storage: StorageService) {}

  ngOnInit() {}

  async ionViewWillEnter() {
    // Load the data
    this.data.getProducts().subscribe((data: BaseListResponse<Product>) => {
      // Set the data to display in the template
      this.products = data.data;
    });

    const cart = await this.storage.getCart();
    if (cart.data.length) {
      this.isShowCart = true;
    } else {
      this.isShowCart = false;
    }
  }

  // getProducts(): Promise<Product[]> {
  //   return this.data.getProducts();
  // }
  async clickedCart() {
    console.log('da click');
    const cart = await this.storage.getCart();
    console.log('load ra');
    console.log(cart);
  }
}
