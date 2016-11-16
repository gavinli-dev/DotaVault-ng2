import { NgModule }     from '@angular/core';
import { HttpModule }   from '@angular/http';

import { HeroPotraitService }   from './hero-potrait.service';
import { HeroService }          from './hero.service';
import { AbilityService }       from './ability.service';

@NgModule({
    imports: [
        HttpModule,
    ],
    providers: [
        HeroPotraitService,
        HeroService,
        AbilityService
    ]
})
export class DbModule { }