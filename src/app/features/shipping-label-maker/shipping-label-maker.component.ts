import { Component } from '@angular/core';
import { ShippingInfoObj } from 'src/app/models/shippingInfoObj.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Router } from '@angular/router';

@Component({
  selector: 'shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html'
})
export class ShippingLabelMakerComponent implements OnInit {
    shippingInfoObj: ShippingInfoObj;
    constructor(private router: Router) {
  
    }
    ngOnInit() {
        this.shippingInfoObj = {
            from: {
                name: '',
                street: '',
                city: '',
                state: '',
                zip: ''
            }, 
            to: {
                name: '',
                street: '',
                city: '',
                state: '',
                zip: ''
            },
            weight: null,
            shippingOption: null
        }
    }

    generateShippingLabel(event) {
        this.router.navigate(['/label']);
    }
}
