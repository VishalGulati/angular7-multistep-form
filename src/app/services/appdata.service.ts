import { routeMapper, stepMapper } from 'src/app/configuration/app.utility';
import { Subject } from 'rxjs';
import { ShippingInfoObj } from 'src/app/models/shippingInfoObj.model';

export class AppdataService {
    currentStep: number = 0;
    formValid: boolean = true;
    shippingInfoObj: ShippingInfoObj = {
        from: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        to: {
            name: '',
            street: '',
            city: '',
            state: '',
            zip: ''
        },
        weight: null,
        shippingOption: null
    }
    stepSubject = new Subject();
    confirmSubject = new Subject();
    pathForCurrentStep = () => {
        return routeMapper(this.currentStep);
    }
    changeStep = (action: number) => {
        switch (action) {
            case 1:
                this.currentStep >= 1 ? this.currentStep-- : this.currentStep = 0;
                break;
            case 2:
                this.currentStep < 4 ? this.currentStep++ : this.currentStep = 0;
                break;
            case 3:
                this.currentStep = 4;
                break;
            default: break;
        }
        this.stepSubject.next(this.currentStep);
        return this.pathForCurrentStep();
    }
    updateFormState(key, val) {
        this.shippingInfoObj[key] = val;
    }
    setCurrentStep(val) {
        this.currentStep = stepMapper(val);
        this.stepSubject.next(this.currentStep);
    }
}