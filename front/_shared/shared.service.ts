import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    graphicsRoot(type: string): string {
        switch(type) {
            case 'hero':
                return "/graphics/heroes";
            case 'item':
                return "/graphics/items";
        }
        
    }
}