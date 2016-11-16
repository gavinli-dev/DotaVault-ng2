import { Component, Input } from "@angular/core";
import { Ability }  from "../../db/ability.service";
@Component({
    selector: "ability-icon",
    templateUrl: "./ability-icon.component.html"
})
export class AbilityIconComponent {
    @Input() ability: Ability;
    
}