import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckoutPageRoutingModule } from './checkout-routing.module';

import { CheckoutPage } from './checkout.page';
import { StorageService } from '../services/storage.service';
import { CheckoutItemComponentModule } from './checkout-item/checkout-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckoutPageRoutingModule,
    CheckoutItemComponentModule,
  ],
  declarations: [CheckoutPage],
  providers: [StorageService],
})
export class CheckoutPageModule {}
