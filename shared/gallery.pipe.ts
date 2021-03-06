import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'gallery'})
export class GalleryPipe implements PipeTransform {
    transform(value: string, type: string, size?: string): string {
        let cdnUrl:string; 
        let suffix:string[];

        let heroCdn = 'http://cdn.dota2.com/apps/dota2/images/heroes';
        let abilityCdn = "http://cdn.dota2.com/apps/dota2/images/abilities";
        let heroImgSuffix = [
            'sb.png',
            'lg.png',
            'full.png',
            'vert.jpg'
        ];
        let abilityImgSuffix = [
            'sm.png',
            'md.png',
            'hp1.png',
            'lg.png'
        ];

        switch(type) {
            case 'hero':
                cdnUrl = heroCdn + '/' + value;
                suffix = heroImgSuffix;
                break;
            case 'ability':
                cdnUrl = abilityCdn + '/' + value;
                suffix = abilityImgSuffix;
                break;
        }
        switch(size) {
            case 'sm':
                cdnUrl+= '_' + suffix[0];
                break;
            case 'md':
                cdnUrl+= '_' + suffix[1];
                break;
            case 'lg':
                cdnUrl+= '_' + suffix[2];
                break;
            case 'ex':
                cdnUrl+= '_' + suffix[3];
                break;
            default:
                cdnUrl+= '_' + suffix[0];
                break;
        }
        return cdnUrl;
    }
}