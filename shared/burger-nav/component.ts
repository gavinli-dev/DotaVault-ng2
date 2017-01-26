import {
    Component, ElementRef, HostListener, ContentChildren,
    OnInit, AfterContentInit, QueryList } from '@angular/core';

@Component({
    selector: 'burger-nav',
    templateUrl: './component.html',
    styleUrls: [
        './component.css'
    ]
})
export class BurgerNavComponent implements OnInit, AfterContentInit {
    @ContentChildren('navLink') navLinks: QueryList<ElementRef>;
    isActive: boolean = false;
    navbarExpanded: boolean = false;
    navCollectionHidden: boolean = false;

    mobileDisplay: boolean = false;

    constructor(private el: ElementRef) {

    }

    toggleNav() {
        this.el.nativeElement.blur();
        this.isActive = !this.isActive;
        if(this.mobileDisplay) {
            if(this.isActive) {
                this.navbarExpanded = true;
                this.navCollectionHidden = false;
            } else {
                this.navbarExpanded = false;
                this.navCollectionHidden = true;
            }
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(ev: any) {
        let windowWidth = ev.target.innerWidth;
        if(windowWidth <= 680 && !this.mobileDisplay) {
            //enter mobile display mode
            //set nav collection to hide, and show burger button
            this.mobileDisplay = true;
            this.isActive = false;
            this.navCollectionHidden = true;
        } else if(windowWidth > 680 && this.mobileDisplay) {
            //exit mobile display mode;
            //set nav collection to show, hide burger button
            this.mobileDisplay = false;
            this.isActive = true;
            this.navbarExpanded = false;
            this.navCollectionHidden = false;
        }
    }

    ngOnInit() {
        let windowWidth = window.innerWidth;
        if(windowWidth <= 680) {
            this.mobileDisplay = true;
            this.navCollectionHidden = true;
        }
    }

    ngAfterContentInit() {
        let TH = this;
        this.navLinks.forEach(nl => {
            nl.nativeElement.addEventListener('click', function() {
                if(TH.mobileDisplay) {
                    TH.isActive = false;
                    TH.navbarExpanded = false;
                    TH.navCollectionHidden = true;
                }
            });
        });
    }
}