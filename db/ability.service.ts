import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }       from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import { Ability }              from './ability';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export { Ability } from './ability';

@Injectable()
export class AbilityService {
    private abilityApi: string = "/api/ability";

    constructor(
        private http: Http,

    ) {}

    getAbilitiesByHeroKey(heroKey): Observable<Ability[]> {
        return this.http.get(this.abilityApi + '?hero_key=' + heroKey)
            .map(this.extractData);
    }

    // getAbilitiesByHeroId(heroId): Observable<Ability[]> {
    //     return this.http.get(this.abilityApi + '?hero_id=' + heroId)
    //         .map(this.extractData);
    // }

    extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}