System.register(['angular2/core', 'angular2/router', 'angular2/http', 'angular2/common', './timer.component', './services/score.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_2, http_1, common_1, timer_component_1, score_service_1;
    var GridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (timer_component_1_1) {
                timer_component_1 = timer_component_1_1;
            },
            function (score_service_1_1) {
                score_service_1 = score_service_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent(_scoreService) {
                    this._scoreService = _scoreService;
                    this.grid = [];
                    this.colors = [];
                }
                GridComponent.prototype.initGrid = function () {
                    var i = 1;
                    for (i = 0; i < 8; i++) {
                        this.grid[i] = i + 1;
                    }
                    this.grid[8] = null;
                };
                ;
                GridComponent.prototype.ngOnInit = function () {
                    this.colors = this.getColors();
                    this.initGrid();
                    //shuffle the grid array in random order
                    this.shuffle();
                    this.swap(7, this.grid.indexOf(null));
                };
                ;
                GridComponent.prototype.getColors = function () {
                    var colors = [];
                    var max = 45;
                    var min = 0;
                    var r = (Math.floor(Math.random() * (max - min + 1)) + min) % 256;
                    var g = (Math.floor(Math.random() * (max - min + 1)) + min) % 256;
                    var b = (Math.floor(Math.random() * (max - min + 1)) + min) % 256;
                    var str = "";
                    colors.push("rgb(" + r + "," + g + "," + b + ")");
                    for (var i = 0; i < 7; i++) {
                        r += 30;
                        g += 30;
                        b += 30;
                        str = "rgb(" + r + "," + g + "," + b + ")";
                        colors.unshift(str);
                    }
                    return colors;
                };
                GridComponent.prototype.checkClicked = function (index) {
                    this.checkNeighbors(index);
                };
                ;
                GridComponent.prototype.checkNeighbors = function (index) {
                    var indexNull = Math.abs(this.grid.indexOf(null));
                    if ((Math.abs(indexNull - index) === 1) ||
                        (Math.abs(indexNull - index) === 3)) {
                        if ((index === 3 && indexNull === 2) ||
                            (index === 2 && indexNull === 3) ||
                            (index === 5 && indexNull === 6) ||
                            (index === 6 && indexNull === 5)) {
                        }
                        else {
                            //console.log("we can swap");
                            this.swap(indexNull, index);
                            if (this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, 8, null]) ||
                                this.sameArray(this.grid, [1, 2, 3, 4, 5, 6, 7, null, 8])) {
                                this.notifyWinner();
                            }
                        }
                    }
                };
                ;
                GridComponent.prototype.swap = function (index1, index2) {
                    var temp = this.grid[index1];
                    this.grid[index1] = this.grid[index2];
                    this.grid[index2] = temp;
                    temp = this.colors[index1];
                    this.colors[index1] = this.colors[index2];
                    this.colors[index2] = temp;
                };
                ;
                GridComponent.prototype.sameArray = function (array1, array2) {
                    return array1.length == array2.length && array1.every(function (element, index) {
                        return element === array2[index];
                    });
                };
                ;
                /**
                 * Shuffles array in place.
                 * @param {Array} a items The array containing the items.
                 */
                GridComponent.prototype.shuffle = function () {
                    var j, x, i;
                    for (i = this.grid.length; i; i -= 1) {
                        j = Math.floor(Math.random() * i);
                        x = this.grid[i - 1];
                        this.grid[i - 1] = this.grid[j];
                        this.grid[j] = x;
                    }
                };
                ;
                GridComponent.prototype.shuffle_old = function (a) {
                    var j, x, i;
                    for (i = a.length; i; i -= 1) {
                        j = Math.floor(Math.random() * i);
                        x = a[i - 1];
                        a[i - 1] = a[j];
                        a[j] = x;
                    }
                };
                ;
                GridComponent.prototype.notifyWinner = function () {
                    this._timerComponent.stopTimer();
                    var endTime = this._timerComponent.time;
                    var endTimeStr = this._timerComponent.timeStr;
                    var name = prompt("Congrats! You won and your result is " + endTimeStr + " Please enter your name to save your awesome result to our database");
                    if (name) {
                        this._scoreService.postItem({ "username": name, "time": endTime }).subscribe();
                    }
                };
                __decorate([
                    core_2.ViewChild(timer_component_1.TimerComponent), 
                    __metadata('design:type', timer_component_1.TimerComponent)
                ], GridComponent.prototype, "_timerComponent", void 0);
                GridComponent = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        templateUrl: 'app/grid.component.html',
                        styleUrls: ['app/shared/styles.css', 'app/grid.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            timer_component_1.TimerComponent,
                            common_1.NgStyle
                        ],
                        providers: [http_1.HTTP_PROVIDERS, score_service_1.ScoreService]
                    }), 
                    __metadata('design:paramtypes', [score_service_1.ScoreService])
                ], GridComponent);
                return GridComponent;
            })();
            exports_1("GridComponent", GridComponent);
        }
    }
});
//# sourceMappingURL=grid.component.js.map