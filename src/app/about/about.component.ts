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
    const somePromise = new Promise((resolve, reject) => {
      resolve('Resolved!');
      // reject('Rejected!');
    });

    const observableFromPromise$ = from(somePromise);

    observableFromPromise$.subscribe({
      next: value => console.log(value),
      // error: err => console.log('Error:', err),
      complete: () => console.log('Completed')
    });


// const names$ = new Observable<string>(subscriber => {
//   subscriber.next('Alice');
//   subscriber.next('Ben');
//   subscriber.next('Charlie');
//   subscriber.complete();
// });

// names$.subscribe({
//   next: value => console.log(value),
//   complete: () => console.log('Completed')
// });

    // function ourOwnOf(args: string[]): Observable<string> {
    //   return new Observable<string>(subscriber => {
    //     for (let i = 0; i < args.length; i++) {
    //       subscriber.next(args[i]);
    //     }
    //     subscriber.complete();
    //   });
    // }
  }

  run($event: MouseEvent) {

  }
}






