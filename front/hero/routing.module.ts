import { NgModule }                 from '@angular/core';
import { Routes, RouterModule }     from '@angular/router';

import { HeroDetailComponent }      from './hero-detail.component';
import { HeroListComponent }        from './hero-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'heroes', component: HeroListComponent },
            { path: 'hero-detail/:id', component: HeroDetailComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class RoutingModule {}