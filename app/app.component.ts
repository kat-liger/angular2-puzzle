import {Component, OnInit, Injector, provide} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {TimerComponent} from './timer.component';
import {ScoreComponent} from './score.component';
import {GridComponent} from './grid.component';

@Component({
    selector: 'puzzle',
    template: `
    <div class="main">
    <h1>{{title}}</h1>
    <router-outlet></router-outlet>
    </div>
    `,
    styleUrls: ['app/shared/styles.css'],
    directives: [
        ROUTER_DIRECTIVES,
        GridComponent,
        ScoreComponent
    ],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/grid',
        name: 'Grid',
        component: GridComponent,
        useAsDefault: true
    },
    {
        path: '/score',
        name: 'Score',
        component: ScoreComponent
    }
])

export class AppComponent implements OnInit {

    public title = 'Shades';

    ngOnInit() {
        console.log("main app init");
    };


}

