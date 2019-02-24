import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'sender-address',
  templateUrl: './sender-address.component.html',
  styleUrls: ['./sender-address.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GetSenderAddressComponent implements OnInit {
  senderForm: FormGroup;
  constructor(private appdataService: AppdataService) {

  }

  ngOnInit() {
    const { from } = this.appdataService.shippingInfoObj;
    this.senderForm = new FormGroup({
      name: new FormControl(from.name, Validators.required),
      street: new FormControl(from.street),
      city: new FormControl(from.city),
      state: new FormControl(from.state),
      zip: new FormControl(from.zip, [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(8),
      ])
    });
    this.senderForm.valueChanges.subscribe(
      (value) => {
        if(this.senderForm.invalid) {
          this.appdataService.formValid = false;
        }
        this.appdataService.updateFormState('from', value);
      }
    )
  }
}
