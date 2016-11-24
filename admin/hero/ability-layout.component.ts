import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";
import { Ability }          from "../../db/ability.service"

@Component({
    selector: "ability-layout",
    templateUrl: "./ability-layout.component.html"
})
export class AbilityLayoutComponent implements OnInit {
    @Input() layoutSlot: number;
    @Input() abilities: Ability[];
    @Output() abilitiesChanged: EventEmitter<any> = new EventEmitter();

    slotIndex: number = 0;

    onInsertAbility() {
        alert("should be a popup window for ability selection!!");
    }

    onAbilitySelect ($event: any) {
        this.abilities[this.slotIndex] = $event;
        this.abilitiesChanged.emit(this.abilities);
    }

    onSelectSlot (slotIndex: number) {
        this.slotIndex = slotIndex;
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