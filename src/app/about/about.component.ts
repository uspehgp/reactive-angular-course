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

    interface NewsItem {
      category: 'Business' | 'Sports';
      content: string;
    }

    const newsFeed$ = new Observable<NewsItem>(subscriber => {
      setTimeout(() =>
        subscriber.next({category: 'Business', content: 'A'}), 1000);
      setTimeout(() =>
        subscriber.next({category: 'Sports', content: 'B'}), 3000);
      setTimeout(() =>
        subscriber.next({category: 'Business', content: 'C'}), 4000);
      setTimeout(() =>
        subscriber.next({category: 'Sports', content: 'D'}), 6000);
      setTimeout(() =>
        subscriber.next({category: 'Business', content: 'E'}), 7000);
    });

    const sportsNewsFeed$ = newsFeed$.pipe(
      filter(item => item.category === 'Sports'));

    // console.log(sportsNewsFeed$);

    sportsNewsFeed$.subscribe(
      item => console.log(item)
    );
  }

  run($event: MouseEvent) {

  }
}



