import { bootstrap }    from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { AppComponent } from './app.component';

// enableProdMode();

bootstrap(AppComponent, [
    ROUTER_PROVIDERS
]);