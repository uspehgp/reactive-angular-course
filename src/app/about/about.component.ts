import {Component, EventEmitter, OnInit, ViewEncapsulation} from '@angular/core';
import {
  concat,
  fromEvent,
  interval,
  noop,
  observable,
  Observable,
  of,
  timer,
  merge,
  Subject,
  BehaviorSubject,
  AsyncSubject,
  ReplaySubject, from
} from 'rxjs';
import {delayWhen, filter, map, take, timeout} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {

    // const ajax$ = ajax('https://random-data-api.com/api/name/random_name');
    // ajax$.subscribe(data => console.log('Subs1', data.response.first_name));
    // ajax$.subscribe(data => console.log('Subs2', data.response.first_name));
    // ajax$.subscribe(data => console.log('Subs3', data.response.first_name));
    // const observable$ = new Observable<number>(subscriber => {
    //   let counter = 0;
    //   const intervalId = setInterval(() => {
    //     console.log('emitted ', counter);
    //     subscriber.next(counter++);
    //   }, 1000);
    //   return () => {
    //     clearInterval(intervalId);
    //   };
    // });
    //
    // const subscription = observable$.subscribe(value => console.log(value));
    //
    // setTimeout(() => {
    //   subscription.unsubscribe();
    //   console.log('Unsubscribed');
    // }, 7000);

  }
//   const helloButton = document.querySelector('button#hello');
//
//   const helloClick$ = new Observable<MouseEvent>(subscriber => {
//     helloButton.addEventListener('click', (event) => {
//       subscriber.next(event);
//     });
//   });
//
//   helloClick$.subscribe(
//     event => console.log('Sub 1:', event.type, event.x, event.y)
// );
//
//   setTimeout(() => {
//   console.log('Subscription 2 starts');
//   helloClick$.subscribe(
//     event => console.log('Sub 2:', event.type, event.x, event.y)
// );
// }, 5000);

  run($event: MouseEvent) {
    const runClick = new Observable(subscriber => {
      const clickBut = new EventEmitter((event) => {
        subscriber.next(event);
      });
    });

    runClick.subscribe(event => console.log(event));


  }

}






