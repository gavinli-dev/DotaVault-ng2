import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DbModule }                 from '../../db/db.module';
import { HeroModule }               from '../hero/hero.module';
import { DashboardComponent }       from './dashboard.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardComponent }
        ]),
        DbModule,
        HeroModule
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }