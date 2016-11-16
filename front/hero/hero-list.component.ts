import { Component, OnInit }                from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { Hero, HeroService }        from '../../db/hero.service';
import { HeroListIconComponent }    from './hero-list-icon.component';

@Component({
    selector: 'heroes',
    template: `
        <h1>Heroes</h1>
        <div class='focused-hero-quickview'>
            <div *ngIf="focusedHero">
                <div class="hero-name">{{focusedHero.name}}</div>
                Attack: {{focusedHero.attackType}}
            </div>
            <div *ngIf="!focusedHero">
                Select a hero to view detailed feature!
            </div>
        </div>
        <div class='hero-list'>
            <hero-list-icon *ngFor='let hero of heroes' [hero]='hero' (heroFocused)="onHeroFocused($event)"></hero-list-icon>
        </div>
    `,
    styles: [`
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
    `]
})
export class HeroListComponent implements OnInit {
    heroes: Hero[];
    focusedHero: Hero;
    private selectedId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private heroService: HeroService
    ) { }

    isSelected(hero: Hero) {
        //return hero.id === this.selectedId;
    }

    onHeroFocused(heroEvent) {
        this.focusedHero = heroEvent;
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