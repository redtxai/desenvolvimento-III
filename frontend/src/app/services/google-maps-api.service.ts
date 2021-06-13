import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsAPIService {
  private readonly googleMapsApiURL = 'https://maps.googleapis.com/maps/api/'
  private readonly distanceModuleName = 'distancematrix'
  private readonly geocodeModuleName = 'geocode'
  private readonly apiKey = 'AIzaSyA_S1dfOa1u4cMntv21q3sfnsLDTqF2lNg'

  constructor(private http: HttpClient) {}

  getGeocodeFromAddress(address: string) {
    return  this.http.get(this.getURL(this.geocodeModuleName, 'address', address)).subscribe((res: any) => {
      console.log(res)
    })
  }

  getDistanceBetweenAddresses(addresses: string) {
    return  this.http.get(this.getURL(this.distanceModuleName, 'origins', addresses)).subscribe((res: any) => {
      console.log(res)
    })
  }

  private getURL(module: string, attr: string, value: string): string {
    return `${this.googleMapsApiURL}/${module}/json?${attr}=${value}&key=${this.apiKey}`
  }
}
