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

    const randomFirstName$ = ajax('https://random-data-api.com/api/name/random_name').pipe(
      map(ajaxResponse => ajaxResponse.response.first_name)
    );

    const randomCapital$ = ajax('https://random-data-api.com/api/nation/random_nation').pipe(
      map(ajaxResponse => ajaxResponse.response.capital)
    );

    const randomDish$ = ajax('https://random-data-api.com/api/food/random_food').pipe(
      map(ajaxResponse => ajaxResponse.response.dish)
    );

    // randomFirstName$.subscribe(value => console.log(value));
    // randomCapital$.subscribe(value => console.log(value));
    // randomDish$.subscribe(value => console.log(value));

    forkJoin([randomFirstName$, randomCapital$, randomDish$]).subscribe(
      ([firstName, capital, dish]) => console.log(`${firstName} is from ${capital} and likes to eat ${dish}.`)
    );
  }

  run($event: MouseEvent) {

  }
}



