import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.scss']
})
export class GetShippingOptionComponent implements OnInit {
  shippingOptionForm: FormGroup;
  constructor(private appdataService: AppdataService) {

  }

  ngOnInit() {
    const { shippingOption } = this.appdataService.shippingInfoObj;
    this.shippingOptionForm = new FormGroup({
      shippingOption: new FormControl(shippingOption, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(1),
      ])
    });
    this.shippingOptionForm.valueChanges.subscribe(
      (value) => {
        if(this.shippingOptionForm.invalid) {
          this.appdataService.formValid = false;
        }
        this.appdataService.updateFormState('shippingOption', value.shippingOption);
      }
    )
  }
}
