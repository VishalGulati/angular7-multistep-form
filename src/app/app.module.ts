import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/features/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from 'src/app/features/progress-bar/progress-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { GetSenderAddressComponent } from 'src/app/features/shipping-label-maker/wizard-steps/sender-address/sender-address.component';
import { GetReceiverAddressComponent } from 'src/app/features/shipping-label-maker/wizard-steps/receiver-address/receiver-address.component';
import { GetWeightComponent } from 'src/app/features/shipping-label-maker/wizard-steps/weight/weight.component';
import { GetShippingOptionComponent } from 'src/app/features/shipping-label-maker/wizard-steps/shipping-option/shipping-option.component';
import { WizardStepsComponent } from 'src/app/features/shipping-label-maker/wizard-steps/wizard-steps.component';
import { AppdataService } from 'src/app/services/appdata.service';
import { WizardFooterComponent } from 'src/app/features/wizard-footer/wizard-footer.component';
import { ShippingLabelMakerComponent } from 'src/app/features/shipping-label-maker/shipping-label-maker.component';
import { ConfirmComponent } from 'src/app/features/shipping-label-maker/wizard-steps/confirm/confirm.component';
import { ShippingLabelComponent } from 'src/app/features/shipping-label-maker/shipping-label/shipping-label.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProgressBarComponent,
    GetSenderAddressComponent,
    GetReceiverAddressComponent,
    GetWeightComponent,
    GetShippingOptionComponent,
    WizardStepsComponent,
    WizardFooterComponent,
    ShippingLabelMakerComponent,
    ConfirmComponent,
    ShippingLabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [AppdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
