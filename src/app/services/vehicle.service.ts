import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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
}
