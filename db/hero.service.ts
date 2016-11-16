import { Injectable }   from '@angular/core';
import { Http, Response, Headers, RequestOptions }       from '@angular/http';
import { Observable }           from 'rxjs/Observable';
import { Hero }                 from './hero';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



export { Hero } from './hero';

// const HEROES = [
//     new Hero(1, "Antimage", [3,2,0,0,0]),
//     new Hero(2, "Axe", [0,1,3,3,0]),
//     new Hero(3, "Bane", [0,0,3,3,3]),
//     new Hero(4, "Bloodseeker"),
//     new Hero(5, "Crystal Maiden"),
//     new Hero(6, "Drow Ranger")
// ];

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
        // var heroes = HEROES;

        // return heroes.slice(0, 5);
        return this.http.get(this.heroApi)
            .map(this.extractData);
    }

    getHeroById(id: string): Observable<Hero> {
        let headers = new Headers({'Content-Type': "application/json"});
        let options = new RequestOptions({headers: headers});

        return this.http.get(this.heroApi + '/' + id)
            .map(this.extractData)
            .catch(this.handleError);
    }

    postHero(hero: Hero): Observable<Hero> {
        let headers = new Headers({'Content-Type': "application/json"});
        let options = new RequestOptions({headers: headers});

        return this.http.post(this.heroApi, hero, options).
            catch(this.handleError);
    }

    putHero(hero: Hero): Observable<Hero> {
        let headers = new Headers({'Content-Type': "application/json"});
        let options = new RequestOptions({headers: headers});

        return this.http.put(this.heroApi + "/" + hero.id, hero, options).
            catch(this.handleError);
    }

    // getHeroesFromApi()
    // {
    //     let headers = new Headers({'Content-Type': "application/json"});
    //     let options = new RequestOptions({headers: headers});

    //     let result = this.http.get("http://api.steampowered.com/IEconDOTA2_570/GetHeroes/v1?key=C0B54909492797390B2158D3587729E5")
    //         .map(this.extractData);

    //     //let data = result.json();

    //     // console.log(result);
    //     // console.info("herer");
    //     return result;
    //     // return this.http.get().
    //     //     catch(this.handleError);
    // }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: Response | any) {
        let errMsg: string = "OH an error happend!";
        return Observable.throw(errMsg);
    }
}