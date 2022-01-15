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

    const randomName$ = ajax('https://random-data-api.com/api/name/random_name');

    const randomNation$ = ajax('https://random-data-api.com/api/nation/random_nation');

    const randomFood$ = ajax('https://random-data-api.com/api/food/random_food');

    // randomName$.subscribe(ajaxResponse => console.log(ajaxResponse.response.first_name));
    // randomNation$.subscribe(ajaxResponse => console.log(ajaxResponse.response.capital));
    // randomFood$.subscribe(ajaxResponse => console.log(ajaxResponse.response.dish));

    forkJoin([randomName$, randomNation$, randomFood$]).subscribe(
      ([nameAjax, nationAjax, foodAjax]) => console.log(`${nameAjax.response.first_name} is from ${nationAjax.response.capital} and likes to eat ${foodAjax.response.dish}.`)
    );
  }

  run($event) {
    // fromEvent($event, 'click').subscribe(
    //   event => console.log(event)
    // );
  }
}






