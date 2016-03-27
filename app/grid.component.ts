import {Component, OnInit, Injector, provide} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {ViewChild} from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { NgStyle } from 'angular2/common';

import { TimerComponent } from './timer.component';
import { ScoreService } from './services/score.service';

@Component({
    selector: 'grid',
    templateUrl: 'app/grid.component.html',
    styleUrls: ['app/shared/styles.css','app/grid.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        TimerComponent,
        NgStyle
    ],
    providers: [HTTP_PROVIDERS, ScoreService]
})

export class GridComponent implements OnInit {
    public grid:number[] = [];
    public colors:any[] = [];

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
        this.colors = this.getColors();
        this.initGrid();
        //shuffle the grid array in random order
        this.shuffle();
        this.swap(this.grid, 7, this.grid.indexOf(null));
        this.swap(this.colors, 7,this.colors.indexOf('rgb(255,255,255)'));
    };

    getColors() {
        var colors:any[] = [];
        var max: number = 45;
        var min: number  = 0;
        var r = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var g = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var b = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var str: string = "";
        colors.push("rgb("+r+","+g+","+b+")");
        for (var i=0; i<7; i++) {
            r += 30;
            g += 30;
            b += 30;
            str = "rgb("+r+","+g+","+b+")";
            colors.unshift(str);
        }
        colors.push("rgb(255,255,255)");
        return colors;
    }

    checkClicked(index) {
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
                this.swap(this.grid, indexNull, index);
                this.swap(this.colors, indexNull, index);

                if (this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, 8, null]) ||
                    this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, null, 8])) {
                    this.notifyWinner();
                }
            }
        }
    };

    swap(arr, index1, index2) {
        var temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
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
    shuffle() {
        var j, x, i;
        for (i = this.grid.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = this.grid[i - 1];
            this.grid[i - 1] = this.grid[j];
            this.grid[j] = x;

            x = this.colors[i - 1];
            this.colors[i - 1] = this.colors[j];
            this.colors[j] = x;
        }
    };

    notifyWinner() {
        this._timerComponent.stopTimer();
        var endTime = this._timerComponent.time;
        var endTimeStr = this._timerComponent.timeStr;
        var name = prompt("Congrats! You won and your result is " + endTimeStr + " Please enter your name to save your awesome result to our database");
        if ( name ) {
            this._scoreService.postItem({ "username": name, "time": endTime }).subscribe( );
        }
    }

}

