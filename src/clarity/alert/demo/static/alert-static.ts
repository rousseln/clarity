import {Component} from "@angular/core";

@Component({
    selector: "clr-alert-demo-static",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["../alert.demo.css"],
    template: `
        <h4>Static Styles</h4>
        <ul>
            <li><a [routerLink]="['./styles']">Styles</a></li>
            <li><a [routerLink]="['./types']">Placement</a></li>
            <li><a [routerLink]="['./sizes']">Sizes</a></li>
            <li><a [routerLink]="['./app-level']">App Level Alerts</a></li>
        </ul>
        <router-outlet></router-outlet>
    `
})
export class AlertStaticDemo {
}