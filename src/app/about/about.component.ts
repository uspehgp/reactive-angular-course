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
      subscriber.next('Ben');
      setTimeout(() => subscriber.next('Charlie'), 2000);
     });

    // const observer = {
    //   next: value => console.log(value)
    // };
    // observable$.subscribe(observer);

    console.log('Before subscribe');
    observable$.subscribe(value => console.log(value));
    console.log('After subscribe');

    // setTimeout(() => {
    //   observable$.subscribe(value => console.log('Subscription 2 start: ', value));
    // }, 1000);

  }


  run() {


  }


}






