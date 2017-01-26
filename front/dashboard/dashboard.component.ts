import { Component, OnInit, HostBinding }    from '@angular/core';

import { Hero, HeroService }    from '../../db/hero.service';
import { RatingComponent }      from '../../shared/rating.component';

import { routeAnimation }       from '../route.animation';

@Component({
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    animations: [
        routeAnimation
    ]
})
export class DashboardComponent implements OnInit {
    // @HostBinding("style.opacity") get display() {
    //     return 0;
    // }

    // @HostBinding("style.position") get position() {
    //     return 'absolute';
    // }

    heroes: Hero[];

    @HostBinding("@routeAnimation") get routeAnimation() {
        return 'default';
    }

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHotHeroes().subscribe(
            heroes => this.heroes = heroes
        );
    }
}