import { SaveVehicle } from './../models/saveVehicle';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  
  constructor(private http: Http) { }

  getMakes() {
    return this.http.get('http://localhost:5000/api/makes')
      .pipe(map(res => res.json()));
  }

  getFeatures() {
    return this.http.get('http://localhost:5000/api/features')
      .pipe(map(res => res.json()));
  }

  getVehicle(id) {
    return this.http.get('http://localhost:5000/api/vehicles/' + id)
      .pipe(map(res => res.json()));
  }

  create(vehicle: SaveVehicle) {
    return this.http.post('http://localhost:5000/api/vehicles', vehicle)
      .pipe(map(res => res.json()));
  }

  update(vehicle: SaveVehicle) {
    return this.http.put('http://localhost:5000/api/vehicles/' + vehicle.id, vehicle)
      .pipe(map(res => res.json()));
  }

  delete(id) {
    return this.http.delete('http://localhost:5000/api/vehicles/' + id)
      .pipe(map(res => res.json()));
  }
}
