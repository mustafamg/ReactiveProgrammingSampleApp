import { OurObserver } from './observer';
export class LowTempObserverFan1 implements OurObserver {
    fan1CanRun = true;

    next(value: any) {
        console.log('Close fan 1');
        this.fan1CanRun = true;
    }
}

export class LowTempObserverAir implements OurObserver {
    fan1CanRun = true;

    next(value: any) {
        console.log('Close Air conditioner');
        this.fan1CanRun = false;
    }
}


export class HighTempObserver implements OurObserver {
    fan1CanRun = true;

    next(data: any) {
        if (data.counter >= 3)
            console.log('run fan1 conditioner');
        this.fan1CanRun = false;
    }
}


export class VeryHighTempObserver implements OurObserver {
    fan1CanRun = true;

    next(data: any) {
        if (data.counter >= 6)
            console.log('run fan1 conditioner');
        this.fan1CanRun = false;
    }
}


export class ClientObserver implements OurObserver {
    next(data: any) {
        console.log(data);
    }
}