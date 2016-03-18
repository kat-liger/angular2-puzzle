System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1) {
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
    var core_1, core_2, http_1;
    var API_KEY, ArticleApi, ScoreComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            API_KEY = 'nlUAQq4Ef4_7Bq2FfKcuOVxvxy2ejbaD';
            ArticleApi = (function () {
                function ArticleApi(http) {
                    this.http = http;
                }
                ArticleApi.prototype.searchArticle = function () {
                    var endpoint = 'https://api.mlab.com/api/1/databases/angular2-puzzle/collections/score';
                    var searchParams = new http_1.URLSearchParams();
                    searchParams.set('apiKey', API_KEY);
                    //searchParams.set('q', query);
                    return this.http
                        .get(endpoint, { search: searchParams })
                        .map(function (res) { return res.json(); });
                };
                ArticleApi.prototype.postExample = function (someData) {
                    var endpoint = 'https://your-endpoint';
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this.http
                        .post(endpoint, JSON.stringify(someData), { headers: headers })
                        .map(function (res) { return res.json(); });
                };
                ArticleApi = __decorate([
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ArticleApi);
                return ArticleApi;
            })();
            ScoreComponent = (function () {
                function ScoreComponent(articleApi) {
                    this.articleApi = articleApi;
                }
                ScoreComponent.prototype.ngOnInit = function () {
                    console.log("score init");
                    this.items = this.articleApi.searchArticle();
                };
                ScoreComponent.prototype.goBack = function () {
                    window.history.back();
                };
                ScoreComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        templateUrl: 'app/score.component.html',
                        styleUrls: ['app/shared/styles.css', 'app/score.component.css'],
                        providers: [http_1.HTTP_PROVIDERS, ArticleApi]
                    }), 
                    __metadata('design:paramtypes', [ArticleApi])
                ], ScoreComponent);
                return ScoreComponent;
            })();
            exports_1("ScoreComponent", ScoreComponent);
        }
    }
});
//# sourceMappingURL=score.component.js.map