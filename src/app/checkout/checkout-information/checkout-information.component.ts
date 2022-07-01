import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/api/interface';
import { StorageService } from 'src/app/services/storage.service';
import provinceList from '../../address/tinh_tp.json';
import districtList from '../../address/quan_huyen.json';

@Component({
  selector: 'app-checkout-information',
  templateUrl: './checkout-information.component.html',
  styleUrls: ['./checkout-information.component.scss'],
})
export class CheckoutInformationComponent implements OnInit {
  cartInformation: Cart;

  objectKeys = Object.keys;
  provinces: any;
  districts: any = {};

  // fullname?: string;
  // phone?: string;
  // provinceSelected?: string;
  // districtSelected?: string;
  // addressInputed?: string;
  // height?: number;
  // weight?: number;

  constructor(private storage: StorageService) {}

  async ngOnInit() {
    this.cartInformation = await this.storage.getCart();

    console.log(this.cartInformation);
    this.provinces = provinceList;
    this.handleChangeProvince(this.cartInformation.province);

    // this.fullname = this.cartInformation.fullname;
    // this.phone = this.cartInformation.phone;
    // this.addressInputed = this.cartInformation.address;
    // this.height = this.cartInformation.height;
    // this.weight = this.cartInformation.weight;
  }

  handleChangeProvince(provinceCode) {
    const newDistricts: any = {};
    for (const code of Object.keys(districtList)) {
      if (districtList?.[code]?.parent_code === provinceCode) {
        newDistricts[code] = districtList[code];
      }
    }
    this.districts = { ...newDistricts };
    if (!newDistricts?.[this.cartInformation.district]) {
      this.cartInformation.district = null;
    }
    this.cartInformation.province = provinceCode;
    return this.saveCartInformation();
  }

  handleChangeDistrict(districtCode) {
    this.cartInformation.district = districtCode;
    return this.saveCartInformation();
  }

  handleChangeAddress($event) {
    this.cartInformation.address = $event;
    return this.saveCartInformation();
  }

  saveAddress() {
    // const result = `${this.address}, ${this.districtSelected}, ${this.provinceSelected}`;
    // this.cartInformation.address = result;
  }

  handleChangeFullname(ev) {
    this.cartInformation.fullname = ev.target.value;
    return this.saveCartInformation();
  }

  handleChangePhone(ev) {
    this.cartInformation.phone = ev.target.value;
    return this.saveCartInformation();
  }

  handleChangeHeight(ev) {
    this.cartInformation.height = ev.target.value;
    return this.saveCartInformation();
  }

  handleChangeWeight(ev) {
    this.cartInformation.weight = ev.target.value;
    return this.saveCartInformation();
  }

  async saveCartInformation() {
    console.log('this.cartInformation====================');
    console.log(this.cartInformation);
    return this.storage.updateCartInformation(this.cartInformation);
  }
}
