import { Component, OnInit, HostBinding }   from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Hero, HeroService }        from '../../db/hero.service';
import { HeroListIconComponent }    from './hero-list-icon.component';

import { routeAnimation }       from '../route.animation';

@Component({
    selector: 'heroes',
    templateUrl: 'hero-list.component.html',
    styles: [`
        :host {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }
        .hero-list {
            padding: 15px 25px;
        }
        .focused-hero-quickview {
            height: 120px;
            padding: 15px;
            color: white;
            background: #333;
            border-radius: 4px;
        }
    `],
    animations: [
        routeAnimation
    ]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    focusedHero: Hero;
    private selectedId: number;

    animState: string = 'default';

    @HostBinding("@routeAnimation") get routeAnimation() {
        return this.animState;
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) { }

    isSelected(hero: Hero) {
        //return hero.id === this.selectedId;
    }

    onHeroFocused(heroEvent: any) {
        this.focusedHero = heroEvent;
    }
    
    onHeroSelected(heroEvent: Hero) {
        //console.info(heroEvent);
        this.animState = "childActivate";
        this.router.navigate(['/hero-detail', heroEvent.id]);
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
        });

        this.heroService.getHeroes().subscribe(
            hs => this.heroes = hs
        );
    }
}