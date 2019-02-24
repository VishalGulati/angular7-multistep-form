import { Component } from '@angular/core';
import { ShippingInfoObj } from 'src/app/models/shippingInfoObj.model';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'shipping-label',
  templateUrl: './shipping-label.component.html',
  styleUrls: ['./shipping-label.component.scss']
})
export class ShippingLabelComponent {
  pageHeader: string = "Details of shipment:";
  finalDetails: ShippingInfoObj = null;
  constructor(private appdataService: AppdataService) {

  }
  ngOnInit() {
      this.finalDetails = this.appdataService.shippingInfoObj;
  }
  getKeys(val) {
      return Object.keys(val);
  }
  getNestedDetails(parentKey, childKey) {
    return this.finalDetails[parentKey][childKey];
  }
}
