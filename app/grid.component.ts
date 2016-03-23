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
        //this.shuffle(this.grid);
        this.swap(7,this.grid.indexOf(null));
    };

    getColors() {
        var colors:any[] = [];
        var max: number = 80;
        var min: number  = 0;
        var r = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var g = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var b = (Math.floor(Math.random() * (max - min + 1)) + min)%256;
        var str: string = "";
        colors.push("rgb("+r+","+g+","+b+")");
        for (var i=0; i<7; i++) {
            r += 32;
            g += 32;
            b += 32;
            str = "rgb("+r+","+g+","+b+")";
            colors.unshift(str);
        }
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
        var endTime = this._timerComponent.time;
        var endTimeStr = this._timerComponent.timeStr;
        var name = prompt("Congrats! You won and your result is " + endTimeStr + " Please enter your name to save your awesome result to our database");
        if ( name ) {
            console.log("now we can save the data to DB", name, " - ", endTime);
            this._scoreService.postItem({ "username": name, "time": endTime }).subscribe( );
        }
    }

}

