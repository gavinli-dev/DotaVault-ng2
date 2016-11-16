import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
// import { HttpModule }       from '@angular/http';

import { RatingComponent }  from './rating.component';
import { GalleryPipe }      from './gallery.pipe';
//import { DbHero }    from './db.hero';

@NgModule({
    imports: [
        CommonModule,
        // HttpModule
    ],
    declarations: [
        RatingComponent,
        GalleryPipe
    ],
    exports: [
        RatingComponent,
        GalleryPipe
    ],
    // providers: [
    //     DbHero
    // ]
})
export class SharedModule { }