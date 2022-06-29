import { Component, OnInit } from '@angular/core';
import { BaseListResponse } from '../api/interface';
import { Product, ProductService } from '../api/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.page.html',
  styleUrls: ['./list-product.page.scss'],
})
export class ListProductPage implements OnInit {
  products: Product[];

  constructor(private data: ProductService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    // Load the data
    this.data.getProducts().subscribe((data: BaseListResponse<Product>) => {
      console.log(data.data);
      // Set the data to display in the template
      this.products = data.data;
    });
  }

  // getProducts(): Promise<Product[]> {
  //   return this.data.getProducts();
  // }
  clickedCart() {
    console.log('da click');
  }
}
