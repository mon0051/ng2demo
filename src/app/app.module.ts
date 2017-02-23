import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent }  from './app-root.component';
import { MissionComponent } from "./mission/mission.component";
import { NavComponent } from "./nav/nav.component";
import { appRouterProviders } from "./app.routes";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HttpModule} from "@angular/http";
import '/node_modules/rxjs/add/operator/map';
import '/node_modules/rxjs/add/operator/switchMap';
import '/node_modules/rxjs/add/operator/toPromise';
import '/node_modules/rxjs/add/observable/fromPromise';

@NgModule({
  imports:      [
      BrowserModule,
      appRouterProviders,
      HttpModule
  ],
  declarations: [
      AppRootComponent,
      MissionComponent,
      NavComponent,
      PageNotFoundComponent
],
  bootstrap:    [ AppRootComponent ]
})
export class AppModule { }
