import {Component, OnInit, Injector, provide} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {ViewChild} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';

import { TimerComponent } from './timer.component';
import { ScoreService } from './services/score.service';

@Component({
    selector: 'grid',
    templateUrl: 'app/grid.component.html',
    styleUrls: ['app/shared/styles.css','app/grid.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        TimerComponent
    ],
    providers: [HTTP_PROVIDERS, ScoreService]
})

export class GridComponent implements OnInit {
    public grid:number[] = [];

    @ViewChild(TimerComponent)
    private _timerComponent: TimerComponent;

    constructor(
        private _scoreService: ScoreService) { }

    initGrid() {
        var i: number = 1;
        for (i = 0; i < 8; i++) {
            this.grid[i] = i + 1;
        }
        this.grid[8] = null;
    };

    ngOnInit() {
        this.initGrid();
        //shuffle the grid array in random order
        //this.shuffle(this.grid);
        this.swap(7,this.grid.indexOf(null));
    };

    checkClicked(index) {
        //console.log("cell clicked", index);
        //console.log("index of #cell", this.grid.indexOf(null));
        this.checkNeighbors(index);

    };

    checkNeighbors(index) {
        var indexNull = Math.abs(this.grid.indexOf(null));

        if ((Math.abs(indexNull - index) === 1) ||
            (Math.abs(indexNull - index) === 3)) {

            if ((index === 3 && indexNull === 2) ||
                (index === 2 && indexNull === 3) ||
                (index === 5 && indexNull === 6) ||
                (index === 6 && indexNull === 5)) {
                //console.log("we cannot swap");
            } else {
                //console.log("we can swap");
                this.swap(indexNull, index);

                if (this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, 8, null]) ||
                    this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, null, 8])) {
                    this.notifyWinner();
                }
            }
        }
    };

    swap(index1, index2) {
        var temp = this.grid[index1];
        this.grid[index1] = this.grid[index2];
        this.grid[index2] = temp;
    };

    sameArray(array1, array2) {
        return array1.length == array2.length && array1.every(function(element, index) {
                return element === array2[index];
            });
    };

    /**
     * Shuffles array in place.
     * @param {Array} a items The array containing the items.
     */
    shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    };

    notifyWinner() {
        this._timerComponent.stopTimer();
        var endTime = this._timerComponent.endTime;
        var name = prompt("Congrats! You won and your result is " + endTime + " Please enter your name to save your awesome result in our database");
        if (name.replace(/\s/g, "").length > 0) {
            console.log("now we can save the data to DB", name, " - ", endTime);
            this._scoreService.postItem({ "username": name, "time": endTime });
        }
    }

}

