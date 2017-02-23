import {Component} from '@angular/core';
import {MissionHttpService} from "./mission-http.service";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";

@Component({
    selector:'ffd-mission',
    templateUrl:'app/mission/mission.component.html',
    providers:[MissionHttpService]
})
export class MissionComponent{
    dynamicText: string = "Something profound";
    constructor(http:Http){

    }
}