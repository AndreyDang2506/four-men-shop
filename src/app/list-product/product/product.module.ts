import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductComponent } from './product.component';
import { StorageService } from 'src/app/services/storage.service';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [ProductComponent],
  exports: [ProductComponent],
  providers: [StorageService]
})
export class ProductComponentModule {}
