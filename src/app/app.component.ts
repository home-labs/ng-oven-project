import { Component } from '@angular/core';

import { Oven } from '@actjs.on/oven-ts';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})
export class AppComponent {
    title = 'oven-ts-project';

    constructor() {
        (new Oven.Cookie()).notify('It works!!!!');
    }
}
