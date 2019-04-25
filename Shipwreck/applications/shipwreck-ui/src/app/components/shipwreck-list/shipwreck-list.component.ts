import { Component, OnInit } from '@angular/core';
import {ShipwreckService} from '../../services/shipwreck.service';

@Component({
  selector: 'app-shipwreck-list',
  templateUrl: './shipwreck-list.component.html',
  styleUrls: ['./shipwreck-list.component.css']
})
export class ShipwreckListComponent implements OnInit {

  public shipwrecks;
  constructor(private shipwreckServive: ShipwreckService) { }

  ngOnInit() {
    this.getShipwrecks();
  }

  getShipwrecks() {
    this.shipwreckServive.getShipwrecks().subscribe(
      data => {this.shipwrecks = data; },
      err => console.error(err),
      () => console.log('shipwrecks loaded')
    );
  }

  deleteShipwreck(id: number) {
    this.shipwreckServive.deleteShipwreck(id);
  }

}
