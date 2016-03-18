import { Injectable } from 'angular2/core';
import { Http, Headers, HTTP_PROVIDERS, URLSearchParams } from 'angular2/http';
import 'rxjs/add/operator/map';

const API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';

@Injectable()
export class ScoreService {
    constructor(private http: Http) {}

    getItems() {
        const endpoint = 'https://api.mlab.com/api/1/databases/angular2-puzzle/collections/score';
        const searchParams = new URLSearchParams();
        searchParams.set('apiKey', API_KEY);

        return this.http
            .get(endpoint, {search: searchParams})
            .map(res => res.json());
    }

    postItem(someData) {
        const endpoint = 'https://api.mlab.com/api/1/databases/angular2-puzzle/collections/score?apiKey='+ API_KEY;
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(endpoint, JSON.stringify(someData), { headers: headers })
            .map(res => res.json());


    }
}
