import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

import { ScoreService } from './services/score.service';
import { MsToStrPipe } from './mstostr.pipe';

const API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';

@Component({
    selector: 'puzzle',
    templateUrl: 'app/score.component.html',
    styleUrls: ['app/shared/styles.css', 'app/score.component.css'],
    providers: [HTTP_PROVIDERS,  ScoreService],
    pipes: [MsToStrPipe]
})

export class ScoreComponent implements OnInit {

    public items;
    public sortedItems;

    constructor(
        private _scoreService: ScoreService) { }

    ngOnInit() {
        //this.items = this._scoreService.getItems();
        this.items = this._scoreService.getTopScores();
        //this._scoreService.getItems().subscribe(items => this.items = items);

    }

    goBack() {
        window.history.back();
    }


}


