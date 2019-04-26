import { Component, OnInit } from '@angular/core';
import { ShipwreckService} from '../../services/shipwreck.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-shipwreck-view',
  templateUrl: './shipwreck-view.component.html',
  styleUrls: ['./shipwreck-view.component.css']
})
export class ShipwreckViewComponent implements OnInit {
public shipwreck;
  constructor(private shipwreckService: ShipwreckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShipwreck(this.route.snapshot.params.id);
  }
getShipwreck(id: number) {
    this.shipwreckService.getShipwreck(id).subscribe(
      data => {
        this.shipwreck = data;
      },
      err => console.error(err),
      () => console.log('Shipwreck loaded')
    );
}
}
