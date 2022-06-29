import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListProductPageRoutingModule } from './list-product-routing.module';

import { ListProductPage } from './list-product.page';
import { ProductComponentModule } from './product/product.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListProductPageRoutingModule,
    ProductComponentModule,
  ],
  declarations: [ListProductPage],
})
export class ListProductPageModule {}
