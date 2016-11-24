import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

const platform = platformBrowser();
platform.bootstrapModule(AppModule);