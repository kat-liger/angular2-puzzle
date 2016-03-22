import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'timer',
    template: '<h2>Time: {{timeStr}}</h2>'
})

export class TimerComponent implements OnInit {

    public time = 0;
    public timeStr = '00:00:00';
    private currentTime = new Date().getTime();
    private initialTime = this.currentTime;
    public interval;
    //public endTime;
    //public endTimeStr;

    ngOnInit() {
        console.log("timer init");
        this.startTimer();
    }

    /**
     * Convert number in miliseconds to hh:mm:ss
     * @param {Number} _milsec
     * @return {String} _r
     */
    convertTime(_milsec) {

        var _sec = _milsec / 1000;
        var _h, _m, _s: any;

        _h = Math.floor(((_sec % 31536000) % 86400) / 3600);
        if( _h <= 9 ){
            _h = '0' + _h;
        }

        _m = Math.floor((((_sec % 31536000) % 86400) % 3600) / 60);
        if( _m <= 9 ){
            _m = '0' + _m;
        }

        _s = Math.floor(((_sec % 31536000) % 86400) % 3600) % 60;
        if( _s <= 9 ){
            _s = '0' + _s;
        }
        var _r = _h +':'+ _m +':'+ _s;
        return _r;
    };

    public startTimer() {
        this.interval = setInterval(
            () => {
                var currentTime = new Date().getTime();
                this.time = currentTime - this.initialTime;
                this.timeStr = this.convertTime(currentTime - this.initialTime);
            }, 1000
        );
    }

    public stopTimer() {
        //this.endTime = this.time;
        //this.endTimeStr = this.timeStr;
        clearInterval(this.interval);
        //return this.endTime;
    }


}