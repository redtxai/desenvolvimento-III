import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

var md5 = require('md5');

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsAPIService {

  constructor(private http: HttpClient) {}

  getGeocodeFromAddress(address: string) {
    return this.getFakeGeocode(address)
  }

  private getFakeGeocode(seed: string) {
    const geocode = md5(seed).replace(/\D/g, "");
    return geocode
  }
}
