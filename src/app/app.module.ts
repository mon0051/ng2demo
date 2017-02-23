import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRootComponent }  from './app-root.component';
import { MissionComponent } from "./mission/mission.component";
import {NavComponent} from "./nav/nav.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
                  AppRootComponent,
                  MissionComponent,
                  NavComponent
                ],
  bootstrap:    [ AppRootComponent ]
})
export class AppModule { }
