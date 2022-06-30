import { Component, Input, OnInit } from '@angular/core';
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
    console.log('addToCart')
    console.log(product)
    const productJson = JSON.stringify(product);
    await this.storage.set('cart', productJson);
  }
}
