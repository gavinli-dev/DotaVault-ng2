import { NgModule }     from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';

import { SharedModule }             from "../../shared/shared.module";
import { AbilityIconComponent }     from "./ability-icon.component";
import { AbilitySelectComponent }   from "./ability-select.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule
    ],
    exports: [
        AbilityIconComponent,
        AbilitySelectComponent
    ],
    declarations: [
        AbilityIconComponent,
        AbilitySelectComponent
    ]
})
export class AbilityModule { }