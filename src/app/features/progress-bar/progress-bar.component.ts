import { Component, OnInit } from '@angular/core';
import { AppdataService } from 'src/app/services/appdata.service';

@Component({
    selector: 'app-progress-bar',
    templateUrl: 'progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
    value: number = 0;
    constructor(private appdataService: AppdataService) {

    }
    ngOnInit() {
        this.value = this.appdataService.currentStep * 20;
        this.appdataService.stepSubject.subscribe((currentStep: number) => {
            this.value = currentStep * 20;
        });
    }
}