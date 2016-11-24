import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { RouterModule }         from '@angular/router';
import { DashboardModule }      from '../dashboard/dashboard.module';
import { HeroModule }           from '../hero/hero.module';
import { BattleArrayModule}     from '../battle-array/battle-array.module';

import { AppComponent }         from './app.component';


@NgModule ({
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]),
        DashboardModule,
        HeroModule,
        BattleArrayModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }