import {
    Component, ContentChildren, Input, QueryList,
    ContentChild, EventEmitter, Output
} from '@angular/core';
import { WizardStepsComponent } from 'src/app/features/shipping-label-maker/wizard-steps/wizard-steps.component';
import { ShippingInfoObj } from 'src/app/models/shippingInfoObj.model';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
    selector: 'wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss']
})

export class WizardComponent {
    @ContentChild(WizardStepsComponent) steps: WizardStepsComponent;
    @Input() wizardContext: ShippingInfoObj;
    @Output() complete = new EventEmitter<{ status: boolean }>();
    showCompleteBtn: boolean = false;
    isformValid: boolean = false;
    constructor(private appdataService: AppdataService) {
  
    }

    generateShippingLabel() {
        this.complete.emit({ status: true });
    }
    ngOnInit() {
      this.appdataService.stepSubject.subscribe((currentStep: number) => {
        this.showCompleteBtn = currentStep === 4;
        this.isformValid = this.appdataService.formValid;
      });
    }
  
}
