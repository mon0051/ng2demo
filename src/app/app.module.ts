import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoot }  from './app.component';
import {Starter} from "./mission/mission.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppRoot, Starter ],
  bootstrap:    [ AppRoot ]
})
export class AppModule { }
