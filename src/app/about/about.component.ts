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
  ReplaySubject, from, forkJoin
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

    const a$ = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next('A');
        subscriber.complete();
      }, 5000);

      return () => {
        console.log('A teardown');
      };
    });

    const b$ = new Observable(subscriber => {
      setTimeout(() => {
        subscriber.error('Failure!');
      }, 3000);

      return () => {
        console.log('B teardown');
      };
    });

    forkJoin([a$, b$]).subscribe({
      next: value => console.log(value),
      error: err => console.log('Error:', err)
    });  }

  run($event) {
    // fromEvent($event, 'click').subscribe(
    //   event => console.log(event)
    // );
  }
}






