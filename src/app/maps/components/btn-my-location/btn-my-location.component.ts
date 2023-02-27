import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css']
})
export class BtnMyLocationComponent {

  constructor(
    private placesServices: PlacesService,
    private mapServices: MapService,
  ) {
    
  }


  goToMyLocation(){

    if( !this.placesServices.isUserLocationReady ) throw Error('No hay ubicacion de usuario');
    if( !this.mapServices.isMapReady) throw Error('No hay mapa disponible')

    this.mapServices.flyTo(this.placesServices.userLocation! )
  }

}
