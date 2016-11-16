import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';
import { RouterModule }     from '@angular/router';

import { DbModule }             from '../../db/db.module';
import { SharedModule }         from '../../shared/shared.module';
import { AbilityModule }        from '../ability/ability.module';
import { HeroRoutingModule}     from './hero-routing.module';

import { HeroListComponent}     from './hero-list.component';
import { HeroEditorComponent }  from './hero-editor.component';
import { PotraitSelect }        from './potrait-select.component';
import { AbilityLayoutComponent}    from './ability-layout.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        //RouterModule,
        DbModule,
        SharedModule,
        AbilityModule,
        HeroRoutingModule
    ],
    declarations: [
        HeroListComponent,
        HeroEditorComponent,
        PotraitSelect,
        AbilityLayoutComponent
    ],
    providers: [
        //HeroService
    ]
})
export class HeroModule { }