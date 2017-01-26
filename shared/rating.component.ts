import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
    selector: 'rating',
    styles: [`
        div.star-box {
            overflow: auto;
            height: 1.5em;
        }
        div.rating-label {
            float: left;
            width: 100px;
            text-align: left;
        }
        div.star {
            width: 25px;
            height: 0.6em;
            border: 1px solid white;
            float: left;
            margin: 6px 6px 0 0;
        }
        div.star.active {
            background: red;
            box-shadow: #777 1px 1px 2px;
        }
    `],
    template: `
    <div *ngIf="isShow()">
        <div class="star-box">
            <div class="rating-label">{{label}}</div>
            <div class="star" *ngFor="let i of loop" [class.active]="isActive(i)"></div>
        </div>
    </div>
    `
})
export class RatingComponent implements OnInit {
    @Input() editable: boolean = false;

    @Input() max: number = 3;
    @Input() rate: number;
    @Input() label: string = "rate label";

    private loop: Array<Number> = [];

    constructor() { }

    isShow() {
        return this.rate > 0;
    }

    isActive(i:number) {
        return i < this.rate;
    }

    ngOnInit() {
        for(var i = 0; i < this.max; i++) {
            this.loop.push(i);
        }
    }
}