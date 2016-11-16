import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

export class HeroPotrait {
    key: string;
    name: string;
    localized_name: string;
}

@Injectable()
export class HeroPotraitService {
    heroPotraitApi:string = '/api/hero-potrait';

    constructor(private http: Http) { }

    getHeroPotrait() {
        let headers = new Headers({'Content-Type': "application/json"});
        let options = new RequestOptions({headers: headers});
        return this.http.get(this.heroPotraitApi, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let data = res.json();

        if(!data["heroes"]) {
            return Observable.throw("api error!");
        }

        return data["heroes"];
    }

    private handleError(error: Response | any) {
        alert("some error occured please come back later!!");
        return Observable.throw("errMsg");
    }
}