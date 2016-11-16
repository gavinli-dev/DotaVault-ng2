import { Component, OnInit, Output, EventEmitter, ViewChild }
    from '@angular/core';
import { Router, ActivatedRoute }
    from '@angular/router';

import { HeroPotrait }              from "../../db/hero-potrait.service";
import { Hero, HeroService }        from '../../db/hero.service';
import { Ability, AbilityService }  from '../../db/ability.service';

import { AbilityLayoutComponent }   from "./ability-layout.component";

@Component({
    //moduleId: module.id,
    templateUrl: './hero-editor.component.html',
    providers: [
        //ActivatedRoute
    ]
})
export class HeroEditorComponent implements OnInit {
    @Output() outputEvent: EventEmitter<Hero> = new EventEmitter();

    @ViewChild(AbilityLayoutComponent) alc: AbilityLayoutComponent;

    hero: Hero;
    heroId: string;

    abilities: Ability[];

    constructor(
        private hs: HeroService,
        private as: AbilityService,
        private router: Router,
        private ar: ActivatedRoute
    ) { }

    onSave(): void {
        let errMsg = "";
        //console.log(this.abilities);

        //console.log(this.alc.abilities);
        this.hero.abilities = this.alc.abilities;

        if(this.heroId == null) {
            this.hs.postHero(this.hero).subscribe(
                hero => {
                    this.outputEvent.emit(hero),
                    this.router.navigate(['hero'])
                },
                error => errMsg = <any>error
            );
        } else {
            this.hs.putHero(this.hero).subscribe(
                hero => {
                    this.outputEvent.emit(hero),
                    this.router.navigate(['hero'])
                },
                error => errMsg = <any>error
            );
        }
    }

    onPotraitSelected($event: HeroPotrait) {
        this.hero.name = $event.localized_name;
        this.hero.key = $event.key;
    }

    ngOnInit(): void {
        this.ar.params.forEach(p => this.heroId = p['id']);

        this.hero = new Hero();
        if(this.heroId != null) {
            this.hs.getHeroById(this.heroId).subscribe(
                h => {
                    this.hero = h
                }
            );
        }
    }
}