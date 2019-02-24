import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'receiver-address',
  templateUrl: './receiver-address.component.html',
  styleUrls: ['./receiver-address.component.scss']
})

export class GetReceiverAddressComponent implements OnInit {
  receiverForm: FormGroup;
  constructor(private appdataService: AppdataService) {

  }

  ngOnInit() {
    const { to } = this.appdataService.shippingInfoObj;
    this.receiverForm = new FormGroup({
      name: new FormControl(to.name, Validators.required),
      street: new FormControl(to.street),
      city: new FormControl(to.city),
      state: new FormControl(to.state),
      zip: new FormControl(to.zip,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
      ])
    });
    this.receiverForm.valueChanges.subscribe(
      (value) => {
        if(this.receiverForm.invalid) {
          this.appdataService.formValid = false;
        }
        this.appdataService.updateFormState('to', value);
      }
    )
  }
}
