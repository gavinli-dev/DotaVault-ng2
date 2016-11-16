import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { FormsModule }      from '@angular/forms';

import { RoutingModule }                from './routing.module';
import { BattleArrayCenterComponent}    from './battle-array-center.component';
import { BattleArrayHomeComponent}      from './battle-array-home.component';
import { BattleArrayService}            from './battle-array.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RoutingModule
    ],
    declarations: [
        BattleArrayCenterComponent,
        BattleArrayHomeComponent
    ],
    providers: [
        BattleArrayService
    ]
})

export class BattleArrayModule { }