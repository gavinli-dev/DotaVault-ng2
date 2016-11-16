import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { BattleArrayCenterComponent }   from './battle-array-center.component';
import { BattleArrayHomeComponent }     from './battle-array-home.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'battle-array-center',
                component: BattleArrayCenterComponent,
                children: [
                    { path: '', component: BattleArrayHomeComponent}
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}