import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {IMissionService} from "./mission.service.interface";
@Injectable()
export class MissionHttpService implements IMissionService{
    private http:Http;
    getMissionStatement(): Observable<string> {
        return this.http.get("http://www.buzzwordipsum.com/buzzwords/?format=text&paragraphs=1&type=sentences").map(x=>x.text());
    }
    constructor(http:Http){
        this.http = http;
    }
}