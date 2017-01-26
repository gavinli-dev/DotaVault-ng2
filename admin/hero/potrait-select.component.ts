import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from "@angular/core";

import { LightboxComponent }                from '../../shared/lightbox/component';
import { HeroPotrait, HeroPotraitService }  from "../../db/hero-potrait.service";

@Component({
    selector: 'potrait-select',
    templateUrl: './potrait-select.component.html',
    styleUrls: ['./potrait-select.component.css']
})
export class PotraitSelect implements OnInit {
    @Output() outputEvent = new EventEmitter();
    @ViewChild(LightboxComponent) portraitList: LightboxComponent;
    heroPotraits: HeroPotrait[];
    heroPotrait: HeroPotrait;

    constructor(private hps: HeroPotraitService) { }

    onSelect(hp: HeroPotrait): void {
        this.heroPotrait = hp;
        this.outputEvent.emit(hp);
        this.portraitList.hide();
    }

    onLoadPotraitList() {
        console.log("to load potrait list");
        this.portraitList.show();
    }

    isSelected(key: string) {
        if(this.heroPotrait) {
            return key == this.heroPotrait.key; 
        }
        return false;
    }

    ngOnInit(): void {
        this.hps.getHeroPotrait().subscribe(
            hpList => {
                this.heroPotraits = hpList
            }
        );
    }
}