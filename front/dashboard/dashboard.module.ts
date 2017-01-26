import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule }             from '../../shared/shared.module';
import { DbModule }                 from '../../db/db.module';
import { HeroModule }               from '../hero/hero.module';
import { DashboardComponent }       from './dashboard.component';
import { HeroIconComponent }        from './hero-icon.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild([
            { path: 'dashboard', component: DashboardComponent }
        ]),
        SharedModule,
        DbModule,
        HeroModule
    ],
    declarations: [
        DashboardComponent,
        HeroIconComponent
    ]
})
export class DashboardModule { }