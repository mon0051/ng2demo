import {Injectable} from "@angular/core";
import {IMissionService} from "./mission.service.interface";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class MissionService implements IMissionService{
    content:string = "The most profound thing ever";
    getMissionStatement(): Observable<string>{
        let that = this;
        let promise = new Promise(function(resolve,reject){
            resolve(that.content);
        });

        return Observable.fromPromise(promise);
    }
}