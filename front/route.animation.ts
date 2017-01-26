import { trigger, state, style, transition, animate } from '@angular/core';

export const routeAnimation = trigger('routeAnimation', [
    state('default', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
    })),
    state('childActivate', style({
        opacity: 1,
        transform: 'scale(1) translateY(0)'
    })),
    transition('void => default', [
        style({ opacity: 0, transform: 'scale(.9) translateY(-20px)' }),
        animate('.2s')
    ]),
    transition('default => void', [
        animate('.2s', style({
            transform: 'scale(1)  translateY(20px)',
            opacity: 0
        }))
    ]),
    transition('childActivate => void', [
        animate('1.2s', style({
            transform: 'scale(0.9)  translateY(-120px)',
            opacity: 0
        }))
    ])
]);