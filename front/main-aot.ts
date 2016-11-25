import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../dist-factory/front/app.module.ngfactory';

const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);