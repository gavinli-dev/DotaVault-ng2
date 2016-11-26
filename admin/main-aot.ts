import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../dist-factory/admin/app.module.ngfactory';

const platform = platformBrowser();
platform.bootstrapModuleFactory(AppModuleNgFactory);