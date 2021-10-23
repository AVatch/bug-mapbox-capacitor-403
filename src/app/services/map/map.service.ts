import * as mapboxgl from 'mapbox-gl';

import { Injectable } from '@angular/core';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private maps: { [key: string]: mapboxgl.Map } = {};

  constructor() {
    try {
      (mapboxgl as any).accessToken =
        environment.credentials.mapbox.accessToken;
    } catch (err) {
      console.log('accessToken', err);
    }
  }

  initMap(container: string, style = 'mapbox://styles/mapbox/streets-v11') {
    try {
      this.maps = {
        ...this.maps,
        [container]: new mapboxgl.Map({
          container,
          style,
          center: new mapboxgl.LngLat(40.69473309757883, -73.99708901584583),
        }),
      };
    } catch (err) {
      console.log('init', err);
    }
  }

  getMapByContainerId(container: string): mapboxgl.Map {
    return this.maps[container];
  }
}
