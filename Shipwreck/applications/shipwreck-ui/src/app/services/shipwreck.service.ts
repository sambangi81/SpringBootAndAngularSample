import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({'content-type': 'application/json' })
};

@Injectable()
export class ShipwreckService {

  constructor(private http: HttpClient) { }

  getShipwrecks() {
    return this.http.get('/server/api/v1/shipwrecks');
  }

  getShipwreck(id: number) {
    return this.http.get('/server/api/v1/shipwrecks/' + id);
  }

  createShipwreck(shipwreck) {
    let body = JSON.stringify(shipwreck);
    return this.http.post('/server/api/v1/shipwrecks', body, httpOptions);
  }
  deleteShipwreck(id: number ) {
    return this.http.delete('/server/api/v1/shipwrecks/' + id);
  }

  /*updateShipwreck(id: number, shipwreck) {
    let body = JSON.stringify(shipwreck);
    return this.http.put('/server/api/v1/shipwrecks/' + id , body, httpOptions);
  }*/

}
