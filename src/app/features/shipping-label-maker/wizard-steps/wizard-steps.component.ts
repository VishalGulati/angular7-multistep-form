import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
  selector: 'wizard-steps',
  templateUrl: './wizard-steps.component.html',
  styleUrls: ['./wizard-steps.component.scss']
})
export class WizardStepsComponent {
  title: string = 'WizardStepsComponent';
  showFooter: boolean = true;
  constructor(private appdataService: AppdataService,
    private router: Router) {

  }
  ngOnInit() {
    this.initialiseStepIndex();
    this.appdataService.stepSubject.subscribe((currentStep: number) => {
      this.showFooter = currentStep < 4 || !this.appdataService.formValid;
    });
  }

  initialiseStepIndex() {
    this.router.events.subscribe((url: any) => {
      this.appdataService.setCurrentStep(this.router.url);
    });
  }
}
