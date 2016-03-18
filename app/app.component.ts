import {Component, OnInit, Injector, provide} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

//import {Modal, ModalConfig, ModalDialogInstance, YesNoModal, ICustomModal, YesNoModalContent} from 'angular2-modal';

import {TimerComponent} from './timer.component';
import {ScoreComponent} from './score.component';
import {GridComponent} from './grid.component';

//import {HTTP_BINDINGS} from 'angular2/http';

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
    //providers: [Modal]
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

    public title = 'Puzzle';
    //private modal: Modal;

    ngOnInit() {
        console.log("main app init");
    };


}

