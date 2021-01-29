import { InfiniteDataSource } from './infinite-datasource';
import { ClientObserver, HighTempObserver, LowTempObserverAir, LowTempObserverFan1, VeryHighTempObserver } from './our-reactive/lowTempObserver';
import { OurObserver } from './our-reactive/observer';
import { FilterOperator, OurSubject, PacketingOperator, BufferOperator } from './our-reactive/OurObservable';
//import { MySubject } from './reactive-base';
//import { Subject } from 'rxjs/';
console.log('starting')

let fishStreamer = new OurSubject();
let packeting = new PacketingOperator();

const source = new InfiniteDataSource();
source.start(-10, 40, 100, 2000, value => fishStreamer.next(value));

var fishingPipe = fishStreamer.pipe(
    new FilterOperator(v=> v > 0),
    new BufferOperator(3),
    
    packeting);
    
fishingPipe.subscribe(new ClientObserver);

process.stdin.resume();


//temp sensor streamer => filter(value <= 0) => close fan1
//temp sensor streamer => filter(value <= 0) => close fan2
//temp sensor streamer => filter(value > 0) => happened(3 times) => open fan1
//temp sensor streamer => filter(value > 0) => happened(5 times) => open fan2