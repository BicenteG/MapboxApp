import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, Popup, Marker } from 'mapbox-gl';
import { MapService } from '../../services';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {

  @ViewChild('mapDiv')
  mapDivElement!: ElementRef

  constructor(
    private placesService: PlacesService,
    private mapServices: MapService
  ) { }

  ngAfterViewInit(): void {
    if(!this.placesService.userLocation) throw Error('No hay placesService.userLocation 🥚')

    const map = new Map({
      container: this.mapDivElement.nativeElement, // ID del contenedor del mapa (div ID)
      style: 'mapbox://styles/mapbox/outdoors-v12', // Estilo mapa https://docs.mapbox.com/api/maps/styles/
      center: this.placesService.userLocation, // Longitud y latitud del centro del mapa inicial [lng, lat] //[lat,lng] em google maps
      zoom: 14, // Nivel de zoom inicial
    });

    const popup = new Popup()
    .setHTML(`
      <h6>Estás Aquí</h6>
      <span>Estás en este lugar</span>
    `);

    new Marker({ color: 'red' })
    .setLngLat( this.placesService.userLocation )
    .setPopup( popup )
    .addTo( map)


    this.mapServices.setMap( map );

  }



}
