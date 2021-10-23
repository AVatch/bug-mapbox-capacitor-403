import {
  AfterViewInit,
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { MapService } from './../../../services/map/map.service';

import { randomId } from './../../../utils';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements OnInit, AfterViewInit {
  @Input() id: string = randomId();

  constructor(private mapService: MapService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    // without timeout, does not take full dimensions
    setTimeout(() => {
      this.initMap();
    }, 300);
  }

  private initMap() {
    this.mapService.initMap(this.id);
  }
}
