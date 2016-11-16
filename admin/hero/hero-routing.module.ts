import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroListComponent }    from './hero-list.component';
import { HeroEditorComponent }  from './hero-editor.component';

const routes: Routes = [
    { path: 'hero', component: HeroListComponent },
    { path: 'hero/create', component: HeroEditorComponent },
    { path: 'hero/edit/:id', component: HeroEditorComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class HeroRoutingModule { }