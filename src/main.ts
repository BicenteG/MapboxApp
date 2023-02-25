import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

if( !navigator.geolocation ) {
  alert('Navegador no soporta Geolocalización')
  throw new Error('El navegador no soporta Geolocalización')
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
