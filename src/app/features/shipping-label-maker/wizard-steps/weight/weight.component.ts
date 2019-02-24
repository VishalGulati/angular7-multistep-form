import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'weight',
  templateUrl: './weight.component.html',
  styleUrls: ['./weight.component.scss']
})
export class GetWeightComponent implements OnInit {
  weightForm: FormGroup;
  constructor(private appdataService: AppdataService) {

  }

  ngOnInit() {
    const { weight } = this.appdataService.shippingInfoObj;
    this.weightForm = new FormGroup({
      weight: new FormControl(weight,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.minLength(2),
      ])
    });
    this.weightForm.valueChanges.subscribe(
      (value) => {
        if(this.weightForm.invalid) {
          this.appdataService.formValid = false;
        }
        this.appdataService.updateFormState('weight', value.weight);
      }
    )
  }
}
