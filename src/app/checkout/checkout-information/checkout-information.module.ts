import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckoutInformationComponent } from './checkout-information.component';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [CheckoutInformationComponent],
  exports: [CheckoutInformationComponent],
  providers: [StorageService],
})
export class CheckoutInformationModule {}
