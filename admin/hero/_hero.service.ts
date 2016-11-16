import { Injectable, Inject }   from '@angular/core';
import { Http, Response,
    Headers, RequestOptions }   from '@angular/Http';
import { Observable }           from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

export class Hero {
    id:         number;
    name:       string;
    carry:      number = 0;
    solo:       number = 0;
    gank:       number = 0;
    disabler:   number = 0;
    support:    number = 0;

    constructor(
        id: number,
        name: string,
        rolePotential?: Array<number>
        ) {
        this.id = id;
        this.name = name;
        if(rolePotential) {
            this.carry = rolePotential[0];
            this.solo = rolePotential[1];
            this.gank = rolePotential[2];
            this.disabler = rolePotential[3];
            this.support = rolePotential[4];
        }
    };

    getIcon() {
        return "/graphics/heroes/" + this.name.toLowerCase().replace(' ', '_') + "_full.png";
    };

    getRole() {
        return {
            'carry': this.carry,
            'solo': this.solo,
            'gank': this.gank,
            'disabler': this.disabler,
            'support': this.support 
        }
    };
}

const HEROES = [
    new Hero(1, "Antimage", [3,2,0,0,0]),
    new Hero(2, "Axe", [0,1,3,3,0]),
    new Hero(3, "Bane", [0,0,3,3,3]),
    new Hero(4, "Bloodseeker"),
    new Hero(5, "Crystal Maiden"),
    new Hero(6, "Drow Ranger")
];

@Injectable()
export class HeroService {
    private heroApi: string = "/api/hero";
    //httpRequest: Http;

    constructor(private http: Http) {
        //this.httpRequest = httpR;
    }

    getHeroes() : Observable<Hero[]> {
        return this.http.get(this.heroApi)
            .map(this.extractData);
    }

    // getHeroes() {
    //     var heroes = HEROES;

    //     return heroes;
    // }

    getHotHeroes() {
        var heroes = HEROES;

        return heroes.slice(0, 5);
    }

    getHeroById(id: number): Hero {
        return HEROES[id - 1];
    }

    // postHero(hero: Hero): Observable<Hero> {
        // let headers = new Headers({'Content-Type': "application/json"});
        // let options = new RequestOptions({headers: headers});

        // return this.http.post(this.heroApi, hero, options).
        //     catch(this.handleError);
    // }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }

    // private handleError(error: Response | any) {
    //     let errMsg: string = "OH an error happend!";
    //     return Observable.throw(errMsg);
    // }
}