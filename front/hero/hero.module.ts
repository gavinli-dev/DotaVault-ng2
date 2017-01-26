import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';

import { SharedModule }         from '../../shared/shared.module';
import { HeroService }          from '../../db/hero.service';

import { RoutingModule }        from './routing.module';
//import { HeroIconComponent }    from './hero-icon.component';
import { HeroListComponent }    from './hero-list.component';
import { HeroListIconComponent} from './hero-list-icon.component';
import { HeroDetailComponent }  from './hero-detail.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RoutingModule
        
    ],
    exports: [
        //HeroIconComponent
    ],
    declarations: [
        //HeroIconComponent,
        HeroListComponent,
        HeroListIconComponent,
        HeroDetailComponent
    ],
    providers: [
        HeroService
    ]
})

export class HeroModule { }