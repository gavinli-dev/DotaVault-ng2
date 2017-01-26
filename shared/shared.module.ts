import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { MaterialModule }   from '@angular/material';

import { BurgerNavComponent }   from './burger-nav/component';
import { LightboxComponent }    from './lightbox/component';
import { RatingComponent }      from './rating.component';
import { GalleryPipe }          from './gallery.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        BurgerNavComponent,
        LightboxComponent,
        RatingComponent,
        GalleryPipe
    ],
    exports: [
        BurgerNavComponent,
        LightboxComponent,
        RatingComponent,
        GalleryPipe
    ]
})
export class SharedModule { }