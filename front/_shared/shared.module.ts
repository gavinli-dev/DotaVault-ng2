import { NgModule }         from '@angular/core';
import { CommonModule}      from '@angular/common';

import { RatingComponent }  from './rating.component';
import { SharedService }    from './shared.service';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RatingComponent
    ],
    exports: [
        RatingComponent
    ],
    providers: [
        SharedService
    ]
})
export class SharedModule { }