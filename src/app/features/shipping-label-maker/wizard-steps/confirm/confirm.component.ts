import { Component } from '@angular/core';

@Component({
  selector: 'confirm',
  templateUrl: './confirm.component.html'
})
export class ConfirmComponent {
  confirmMsg: string = "Are you sure?";
}
