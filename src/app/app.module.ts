import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent }  from './app-root.component';
import { MissionComponent } from "./mission/mission.component";
import { NavComponent } from "./nav/nav.component";
import { appRouterProviders } from "./app.routes";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

@NgModule({
  imports:      [
      BrowserModule,
      appRouterProviders
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
