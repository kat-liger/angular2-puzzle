System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TimerComponent = (function () {
                function TimerComponent() {
                    this.time = 0;
                    this.timeStr = '00:00:00';
                    this.currentTime = new Date().getTime();
                    this.initialTime = this.currentTime;
                }
                TimerComponent.prototype.ngOnInit = function () {
                    console.log("timer init");
                    this.startTimer();
                };
                /**
                 * Convert number in miliseconds to hh:mm:ss
                 * @param {Number} _milsec
                 * @return {String} _r
                 */
                TimerComponent.prototype.convertTime = function (_milsec) {
                    var _sec = _milsec / 1000;
                    var _h, _m, _s;
                    _h = Math.floor(((_sec % 31536000) % 86400) / 3600);
                    if (_h <= 9) {
                        _h = '0' + _h;
                    }
                    _m = Math.floor((((_sec % 31536000) % 86400) % 3600) / 60);
                    if (_m <= 9) {
                        _m = '0' + _m;
                    }
                    _s = Math.floor(((_sec % 31536000) % 86400) % 3600) % 60;
                    if (_s <= 9) {
                        _s = '0' + _s;
                    }
                    var _r = _h + ':' + _m + ':' + _s;
                    return _r;
                };
                ;
                TimerComponent.prototype.startTimer = function () {
                    var _this = this;
                    this.interval = setInterval(function () {
                        var currentTime = new Date().getTime();
                        _this.time = currentTime - _this.initialTime;
                        _this.timeStr = _this.convertTime(currentTime - _this.initialTime);
                    }, 1000);
                };
                TimerComponent.prototype.stopTimer = function () {
                    clearInterval(this.interval);
                };
                TimerComponent = __decorate([
                    core_1.Component({
                        selector: 'timer',
                        template: '<h2>Time: {{timeStr}}</h2>'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TimerComponent);
                return TimerComponent;
            })();
            exports_1("TimerComponent", TimerComponent);
        }
    }
});
//# sourceMappingURL=timer.component.js.map