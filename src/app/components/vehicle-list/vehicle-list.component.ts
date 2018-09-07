import { KeyValuePair } from './../../models/keyValuePair';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';

import { VehicleService } from './../../services/vehicle.service';
import { Vehicle } from './../../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[];
  allVehicles: Vehicle[];
  makes: KeyValuePair[];
  filter: any = {};

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    var sources = [
      this.vehicleService.getVehicles(),
      this.vehicleService.getMakes()
    ];

    Observable.forkJoin(sources).subscribe( data => {
      this.vehicles = this.allVehicles = data[0],
      this.makes = data[1]
    });
  }

  onFilterChange() {
    var vehicles = this.allVehicles;

    if (this.filter.makeId)
      vehicles = vehicles.filter(v => v.make.id == this.filter.makeId);

    this.vehicles = vehicles;
  }

  resetFilter() {
    this.filter = {};
    this.onFilterChange();
  }
}
