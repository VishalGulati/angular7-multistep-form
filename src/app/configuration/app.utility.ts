export const routeMapper = step => {
    switch (step) {
        case 0: return 'get-sender';
        case 1: return 'get-receiver';
        case 2: return 'get-weight';
        case 3: return 'get-shipoption';
        case 4: return 'confirm';
        case 5: return 'label';
        default: return 'get-sender';
    }
}
export const stepMapper = path => {
    switch (path) {
        case '/get-sender': return 0;
        case '/get-receiver': return 1;
        case '/get-weight': return 2;
        case '/get-shipoption': return 3;
        case '/confirm': return 4;
        case '/label': return 5;
        default: return 0;
    }
}

export const stepHeaderMapper = step => {
    switch (step) {
        case 0: return 'Enter sender\'s address';
        case 1: return 'Enter receiver\'s address';
        case 2: return 'Enter weight';
        case 3: return 'Enter shipping option';
        case 4: return 'Confirm';
        case 5: return 'Your label';
        default: return 'Enter sender\'s address';
    }
}

export const WizardAction = {
    Prev: 1,
    Next: 2,
    End: 3
};