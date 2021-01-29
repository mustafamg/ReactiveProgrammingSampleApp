import { OurObserver } from "./observer";

export interface IOurObservable {
    subscribe(observer: OurObserver);
    next(value: any);
    //pipe(operator)
}


export interface IOperator extends IOurObservable, OurObserver { }
export class OurSubject implements IOperator {
    protected observerCollection: OurObserver[] = [];
    subscribe(observer: OurObserver) {
        this.observerCollection.push(observer);
    }

    pipe (...operators: IOperator[]): IOperator {
        this.subscribe(operators[0]);
        for (let i = 1; i < operators.length; i++) {
            operators[i-1].subscribe(operators[i]);
        }
        return operators[operators.length-1];
    }

    next(value: any) {
        this.observerCollection.forEach(obs => obs.next(value))
    }
}

export interface filterFn {
    (value): boolean;
}

export class FilterOperator extends OurSubject { //OperatorBase
    constructor(private filterFn: filterFn){
        super()
    }

    next(value: any): void {
        if (this.filterFn(value)) {
            super.next(value)
        }
    }
}

export class BufferOperator extends OurSubject { 
    list = [];
    constructor(private size: number){ 
        super();
    }

    next(value: any): void {
        this.list.push(value);
        if (this.list.length > this.size) {
            super.next(this.list);
            this.list = [];
        }
    }
}

export class PacketingOperator extends OurSubject {
    next(value: any): void {
        super.next('packet:' + value);
    }
}