System.register(['angular2/core', 'angular2/router', './score.component', './grid.component'], function(exports_1) {
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
    var core_1, router_1, score_component_1, grid_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (score_component_1_1) {
                score_component_1 = score_component_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            }],
        execute: function() {
            //import {HTTP_BINDINGS} from 'angular2/http';
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Puzzle';
                }
                //private modal: Modal;
                AppComponent.prototype.ngOnInit = function () {
                    console.log("main app init");
                };
                ;
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'puzzle',
                        template: "\n    <div class=\"main\">\n    <h1>{{title}}</h1>\n    <router-outlet></router-outlet>\n    </div>\n    ",
                        styleUrls: ['app/shared/styles.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            grid_component_1.GridComponent,
                            score_component_1.ScoreComponent
                        ],
                        //providers: [Modal]
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/grid',
                            name: 'Grid',
                            component: grid_component_1.GridComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/score',
                            name: 'Score',
                            component: score_component_1.ScoreComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map