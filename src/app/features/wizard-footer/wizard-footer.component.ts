import { Component } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';
import { WizardAction } from 'src/app/configuration/app.utility';
import { Router } from '@angular/router';

@Component({
  selector: 'wizard-footer',
  templateUrl: './wizard-footer.component.html',
  styleUrls: ['./wizard-footer.component.scss']
})
export class WizardFooterComponent {
  value: number = 0;
  constructor(private appdataService: AppdataService,
    private router: Router) {

  }

  gotoPrevStep() {
    this.router.navigate([this.appdataService.changeStep(WizardAction.Prev)]);
  }

  gotoNextStep() {
    this.router.navigate([this.appdataService.changeStep(WizardAction.Next)]);
  }
}
