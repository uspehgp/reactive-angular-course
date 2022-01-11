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

    const observable$ = new Observable(subscriber => {
      console.log('Observable executed');
      subscriber.next('Alice');
      setTimeout(() => subscriber.next('Ben'), 2000);
      setTimeout(() => subscriber.next('Charlie'), 4000);
      // subscriber.next('Charlie');
    });

    // const observer = {
    //   next: value => console.log(value)
    // };
    // observable$.subscribe(observer);

    const subscription = observable$.subscribe(value => console.log(value));

    setTimeout(() => {
      subscription.unsubscribe();
      console.log('Unsubscribed');
    }, 3000);

  }


  run() {


  }


}






