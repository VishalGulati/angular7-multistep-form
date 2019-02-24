import { Component } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';
import { stepHeaderMapper } from 'src/app/configuration/app.utility';

@Component({
  selector: 'wizard-header',
  templateUrl: './wizard-header.component.html'
})
export class WizardHeaderComponent {
  title:string = 'WizardHeaderComponent';
  constructor(private appdataService: AppdataService) {

  }
  ngOnInit() {
      this.title = stepHeaderMapper(this.appdataService.currentStep);
      this.appdataService.stepSubject.subscribe((currentStep: number) => {
          this.title = stepHeaderMapper(currentStep);
      });
  }
}
