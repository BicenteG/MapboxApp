import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYmljZW50ZSIsImEiOiJjbGVrM21vdXAwN2lxM3dvMXljYjdxNHRkIn0.vO20FIzkd6yOkiqfAlQ4QQ';

if( !navigator.geolocation ) {
  alert('Navegador no soporta Geolocalización')
  throw new Error('El navegador no soporta Geolocalización')
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
