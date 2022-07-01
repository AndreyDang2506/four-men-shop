import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/api/interface';
import { StorageService } from 'src/app/services/storage.service';
import province from '../../address/tinh_tp.json';

@Component({
  selector: 'app-checkout-information',
  templateUrl: './checkout-information.component.html',
  styleUrls: ['./checkout-information.component.scss'],
})
export class CheckoutInformationComponent implements OnInit {
  @Input() cartInformation: Cart;

  province: any;
  district: any;
  wards: any;

  fullname?: string;
  phone?: string;
  address?: string;
  height?: number;
  weight?: number;

  constructor(private storage: StorageService) { }

  ngOnInit() {
    this.province = province;
    this.fullname = this.cartInformation.fullname;
    this.phone = this.cartInformation.phone;
    this.address = this.cartInformation.address;
    this.height = this.cartInformation.height;
    this.weight = this.cartInformation.weight;
  }

  handleChangeFullname(ev) {
    this.cartInformation.fullname = ev.target.value;
    this.saveCartInformation();
  }

  handleChangePhone(ev) {
    this.phone = ev.target.value;
    this.cartInformation.phone = ev.target.value;
    this.saveCartInformation();
  }

  handleChangeHeight(ev) {
    this.height = ev.target.value;
    this.cartInformation.height = ev.target.value;
    this.saveCartInformation();

  }

  handleChangeWeight(ev) {
    this.weight = ev.target.value;
    this.cartInformation.weight = ev.target.value;
    this.saveCartInformation();
  }
  
  saveCartInformation() {
    this.storage.updateCartInformation(this.cartInformation);
  }
}
