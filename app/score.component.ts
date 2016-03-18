import {Component, OnInit} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode, Injectable} from 'angular2/core';
import {Http, Headers, HTTP_PROVIDERS, URLSearchParams} from 'angular2/http';
import 'rxjs/add/operator/map';

const API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';

@Injectable()
class ArticleApi {
    constructor(private http: Http) {}

    searchArticle() {
        const endpoint = 'https://api.mlab.com/api/1/databases/angular2-puzzle/collections/score';
        const searchParams = new URLSearchParams();
        searchParams.set('apiKey', API_KEY);
        //searchParams.set('q', query);

        return this.http
            .get(endpoint, {search: searchParams})
            .map(res => res.json());
    }

    postExample(someData) {
        const endpoint = 'https://your-endpoint';
        const headers = new Headers({'Content-Type': 'application/json'});

        return this.http
            .post(endpoint, JSON.stringify(someData), { headers: headers })
            .map(res => res.json());
    }
}

@Component({
    selector: 'puzzle',
    templateUrl: 'app/score.component.html',
    styleUrls: ['app/shared/styles.css', 'app/score.component.css'],
    providers: [HTTP_PROVIDERS, ArticleApi]
})

export class ScoreComponent implements OnInit {

    constructor(private articleApi: ArticleApi) { }

    ngOnInit() {
        console.log("score init");
        this.items = this.articleApi.searchArticle();
    }

    goBack() {
        window.history.back();
    }


}


