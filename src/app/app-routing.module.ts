import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetSenderAddressComponent } from 'src/app/features/shipping-label-maker/wizard-steps/sender-address/sender-address.component';
import { GetReceiverAddressComponent } from 'src/app/features/shipping-label-maker/wizard-steps/receiver-address/receiver-address.component';
import { GetWeightComponent } from 'src/app/features/shipping-label-maker/wizard-steps/weight/weight.component';
import { GetShippingOptionComponent } from 'src/app/features/shipping-label-maker/wizard-steps/shipping-option/shipping-option.component';
import { ConfirmComponent } from 'src/app/features/shipping-label-maker/wizard-steps/confirm/confirm.component';
import { ShippingLabelComponent } from 'src/app/features/shipping-label-maker/shipping-label/shipping-label.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/get-sender',
    pathMatch: 'full'
  },
  { path: 'get-sender', component: GetSenderAddressComponent },
  { path: 'get-receiver', component: GetReceiverAddressComponent },
  { path: 'get-weight', component: GetWeightComponent },
  { path: 'get-shipoption', component: GetShippingOptionComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: 'label', component: ShippingLabelComponent },
  { path: '**', component: GetSenderAddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
