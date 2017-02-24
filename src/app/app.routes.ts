import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MissionComponent} from "./mission/mission.component";

const routes: Routes = [
    {path: 'home', component:MissionComponent},
    {path: '', component:MissionComponent},
    {path: '**', component: PageNotFoundComponent},
];

export const appRouterProviders: ModuleWithProviders = RouterModule.forRoot(routes);