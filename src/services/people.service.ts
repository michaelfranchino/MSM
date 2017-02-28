import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFire } from 'angularfire2';

import { Person } from '../models/person';

@Injectable()
export class PeopleService {
    constructor(private af: AngularFire) { }

    findAllPeople(): Observable<Person[]> {
        return this.af.database.list('people');
    }
}