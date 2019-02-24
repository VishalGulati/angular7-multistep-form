import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { WizardComponent } from '../shared/wizard/wizard.component';
import { WizardHeaderComponent } from '../shared/wizard/wizard-header/wizard-header.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    WizardComponent,
    WizardHeaderComponent
  ],
  exports: [
    WizardComponent,
    WizardHeaderComponent
  ]
})
export class SharedModule { }
