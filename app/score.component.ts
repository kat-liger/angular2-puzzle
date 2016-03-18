import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import { ScoreService } from './services/score.service';

const API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';

@Component({
    selector: 'puzzle',
    templateUrl: 'app/score.component.html',
    styleUrls: ['app/shared/styles.css', 'app/score.component.css'],
    providers: [HTTP_PROVIDERS,  ScoreService]
})

export class ScoreComponent implements OnInit {

    constructor(
        private _scoreService: ScoreService) { }

    ngOnInit() {
        console.log("score init");
        this.items = this._scoreService.getItems();
    }

    goBack() {
        window.history.back();
    }

}


