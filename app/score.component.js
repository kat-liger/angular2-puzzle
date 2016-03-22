System.register(['angular2/core', 'angular2/http', './services/score.service', './mstostr.pipe'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, score_service_1, mstostr_pipe_1;
    var API_KEY, ScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (score_service_1_1) {
                score_service_1 = score_service_1_1;
            },
            function (mstostr_pipe_1_1) {
                mstostr_pipe_1 = mstostr_pipe_1_1;
            }],
        execute: function() {
            API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';
            ScoreComponent = (function () {
                function ScoreComponent(_scoreService) {
                    this._scoreService = _scoreService;
                }
                ScoreComponent.prototype.ngOnInit = function () {
                    //this.items = this._scoreService.getItems();
                    this.items = this._scoreService.getTopScores();
                    //this._scoreService.getItems().subscribe(items => this.items = items);
                };
                ScoreComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        templateUrl: 'app/score.component.html',
                        styleUrls: ['app/shared/styles.css', 'app/score.component.css'],
                        providers: [http_1.HTTP_PROVIDERS, score_service_1.ScoreService],
                        pipes: [mstostr_pipe_1.MsToStrPipe]
                    }), 
                    __metadata('design:paramtypes', [score_service_1.ScoreService])
                ], ScoreComponent);
                return ScoreComponent;
            })();
            exports_1("ScoreComponent", ScoreComponent);
        }
    }
});
//# sourceMappingURL=score.component.js.map