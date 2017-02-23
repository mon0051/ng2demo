import {Observable} from "rxjs";
export interface IMissionService{
    getMissionStatement() :Observable<string>;
}