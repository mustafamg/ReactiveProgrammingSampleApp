// import { InfiniteDataSource } from './infinite-datasource';
// import { HighTempObserver, LowTempObserverAir, LowTempObserverFan1, VeryHighTempObserver } from './our-reactive/lowTempObserver';
// //import { MySubject } from './reactive-base';
// //import { Subject } from 'rxjs/';
// console.log('starting')

// const source = new InfiniteDataSource();
// source.start(-10, 40, 100, 2000, callback);

// process.stdin.resume();

// let counter = 0;
// let fan1CanRun = true;
// let lowTempSubject = new OurSubject();
// lowTempSubject.registerObserver(new LowTempObserverFan1);
// lowTempSubject.registerObserver(new LowTempObserverAir);

// let highTempSubject = new OurSubject();
// highTempSubject.registerObserver(new HighTempObserver);
// highTempSubject.registerObserver(new VeryHighTempObserver);

// function callback(value: number) {
//     console.log(value);
//     if (value <= 0) {
//         counter = 0;
//         lowTempSubject.notifyObserver({value, counter});
//         return;
//     }

//     counter++;
//     if (counter >= 3) {
//         highTempSubject.notifyObserver({value, counter})
//     }
// }

// //temp sensor streamer => filter(value <= 0) => close fan1
// //temp sensor streamer => filter(value <= 0) => close fan2
// //temp sensor streamer => filter(value > 0) => happened(3 times) => open fan1
// //temp sensor streamer => filter(value > 0) => happened(5 times) => open fan2