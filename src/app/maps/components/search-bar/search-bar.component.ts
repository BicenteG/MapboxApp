import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  private debouceTimer?: NodeJS.Timeout; 

  constructor(private placesService: PlacesService) {
    
  }

  OnQueryChange( query: string = '') {
    
    if( this.debouceTimer ) clearTimeout( this.debouceTimer );

    this.debouceTimer = setTimeout(() => {

      this.placesService.getPlacesByQuery(query)
    }, 1_000)



  }

}
