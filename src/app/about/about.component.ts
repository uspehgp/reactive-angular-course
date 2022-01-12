import {Component, OnInit, ViewEncapsulation} from '@angular/core';
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


@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  ngOnInit() {

    const observable$ = new Observable<number>(subscriber => {
      let counter = 0;
      const intervalId = setInterval(() => {
        console.log('emitted ', counter);
        subscriber.next(counter++);
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    });

    const subscription = observable$.subscribe(value => console.log(value));

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed');
    }, 7000);

  }

  run() {

  }
}






