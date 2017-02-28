import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Observable } from 'rxjs/Observable';
import { PeopleService } from '../services/people.service'
import { Person } from '../models/person';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  people: Person[];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.findAllPeople()
      .do(console.log)
      .subscribe(people => this.people = people);
  }

  register() {

  }

  login() {
  }

  logout() {
  }
}
