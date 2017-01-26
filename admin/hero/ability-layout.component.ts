import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from "@angular/core";
import { LightboxComponent }    from '../../shared/lightbox/component';
import { Ability }              from "../../db/ability.service"

@Component({
    selector: "ability-layout",
    templateUrl: "./ability-layout.component.html",
    styleUrls: [
        './ability-layout.component.css'
    ]
})
export class AbilityLayoutComponent implements OnInit {
    @Input() layoutSlot: number;
    @Input() abilities: Ability[];
    @Output() abilitiesEvents: EventEmitter<any> = new EventEmitter();
    @ViewChild(LightboxComponent) selectorBox: LightboxComponent;
    slotIndex: number = 0;

    onInsertAbility() {
        alert("should be a popup window for ability selection!!");
    }

    onAbilitySelect ($event: any) {
        this.selectorBox.hide();
        this.abilities[this.slotIndex] = $event;
        this.abilitiesEvents.emit(this.abilities);
    }

    onSelectSlot (slotIndex: number) {
        this.slotIndex = slotIndex;
        this.selectorBox.show();
    }

    ngOnInit() {
        if(![3,4,5].some(x => x == this.layoutSlot)) {
            this.layoutSlot = 3;
        }
        
        if(this.abilities == undefined) {
            this.abilities = new Array<Ability>();
            for(let i = 0; i < this.layoutSlot; i++) {
                this.abilities.push(null);
            }
        } else {
            
            console.log(    this.abilities);
            
        }
    }
}