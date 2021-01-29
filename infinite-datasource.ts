import { range, of } from 'rxjs';
import { concatMap, delay, map } from 'rxjs/operators';

export class InfiniteDataSource {
    start(startSequence: number, endSequence: number, startTimeRange: number, endTimeRange: number,callback: generatorCallback) {
        if (callback) {
            const sequenceRange = endSequence-startSequence;
            range(0, sequenceRange).pipe(
                concatMap(i => of(i).pipe(
                    delay(this.getRandom(startTimeRange, endTimeRange)))
                    ),
                map(_=>this.getRandom(startSequence, endSequence))
            ).subscribe(callback,
                console.error,
                ()=>console.warn('completed')
                );
        }
    }

    private getRandom(start: number, end: number): number {
        return Math.round(start + (Math.random() * end));
    }
}

export interface generatorCallback {
    (message: number): void;
}