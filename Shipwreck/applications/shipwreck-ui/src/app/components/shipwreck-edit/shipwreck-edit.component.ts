import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {ShipwreckService} from '../../services/shipwreck.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-shipwreck-edit',
  templateUrl: './shipwreck-edit.component.html',
  styleUrls: ['./shipwreck-edit.component.css']
})
export class ShipwreckEditComponent implements OnInit {
  models: string[] = [
    'Good',
    'Fair',
    'Bad',
  ];
  public shipwreck;
  shipwreckEditform: FormGroup ;
  validMessage = '';
  constructor(private shipwreckService: ShipwreckService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getShipwreck(this.route.snapshot.params.id);
    this.shipwreckEditform = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required),
      yearDiscovered: new FormControl('', Validators.required),
      depth: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required)
    });
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
  updateShipwreck() {

  }


}
