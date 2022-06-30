import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutItemComponent } from './checkout-item.component';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [CheckoutItemComponent],
  exports: [CheckoutItemComponent],
  providers: [StorageService],
})
export class CheckoutItemComponentModule {}
