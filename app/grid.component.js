System.register(['angular2/core', 'angular2/router', './timer.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, core_2, timer_component_1;
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
            function (timer_component_1_1) {
                timer_component_1 = timer_component_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent() {
                    this.grid = [];
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
                    this.initGrid();
                    //shuffle the grid array in random order
                    //this.shuffle(this.grid);
                    this.swap(7, this.grid.indexOf(null));
                };
                ;
                GridComponent.prototype.checkClicked = function (index) {
                    //console.log("cell clicked", index);
                    //console.log("index of #cell", this.grid.indexOf(null));
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
                                //console.log(name);
                                //open modal window
                                this.openModal();
                            }
                        }
                    }
                };
                ;
                GridComponent.prototype.swap = function (index1, index2) {
                    var temp = this.grid[index1];
                    this.grid[index1] = this.grid[index2];
                    this.grid[index2] = temp;
                };
                ;
                GridComponent.prototype.sameArray = function (array1, array2) {
                    return array1.length == array2.length && array1.every(function (element, index) {
                        return element === array2[index];
                    });
                };
                ;
                GridComponent.prototype.openModal = function () {
                    /*let component = YesNoModal;
                     let dialog: Promise<ModalDialogInstance>;
            
                     var modalContent = new YesNoModalContent('Modal title', 'Modal content', false, "Ok", "Cancel")
                     let bindings = Injector.resolve([provide(ICustomModal, {useValue: modalContent})]);
            
                     var modConf = new ModalConfig("sm", true, null);
            
                     dialog = this.modal.open(<any>component, bindings, modConf);
                     dialog.then(
                     resultPromise => {
                     return resultPromise.result.then(
                     result => {
                     this.lastResult = result; //result is true
                     },
                     () => this.lastResult = 'Canceled' //result is false
                     );
                     }
                     );*/
                };
                ;
                /**
                 * Shuffles array in place.
                 * @param {Array} a items The array containing the items.
                 */
                GridComponent.prototype.shuffle = function (a) {
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
                    var endTime = this._timerComponent.endTime;
                    var name = prompt("Congrats! You won and your result is " + endTime + " Please enter your name to save your awesome result in our database");
                    if (name.replace(/\s/g, "").length > 0) {
                        console.log("now we can save the data to DB", name, " - ", endTime);
                    }
                };
                __decorate([
                    core_2.ViewChild(timer_component_1.TimerComponent), 
                    __metadata('design:type', timer_component_1.TimerComponent)
                ], GridComponent.prototype, "_timerComponent");
                GridComponent = __decorate([
                    core_1.Component({
                        selector: 'grid',
                        templateUrl: 'app/grid.component.html',
                        styleUrls: ['app/shared/styles.css', 'app/grid.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            timer_component_1.TimerComponent
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridComponent);
                return GridComponent;
            })();
            exports_1("GridComponent", GridComponent);
        }
    }
});
//# sourceMappingURL=grid.component.js.map