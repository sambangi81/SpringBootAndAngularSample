import { Component, OnInit } from '@angular/core';
import {ShipwreckService} from '../../services/shipwreck.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/observable';

@Component({
  selector: 'app-shipwreck-create',
  templateUrl: './shipwreck-create.component.html',
  styleUrls: ['./shipwreck-create.component.css']
})
export class ShipwreckCreateComponent implements OnInit {

  models: string[] = [
    'Good',
    'Fair',
    'Bad',
  ];
  shipwreckform: FormGroup ;
  validMessage = '';
  constructor(private shipwreckService: ShipwreckService) { }

  ngOnInit() {
    this.shipwreckform = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      condition: new FormControl('', Validators.required),
      yearDiscovered: new FormControl('', Validators.required),
      depth: new FormControl('', Validators.required),
      latitude: new FormControl('', Validators.required),
      longitude: new FormControl('', Validators.required),
      contact: new FormControl()
    });
  }

  submitShipwreck() {
    if (this.shipwreckform.valid) {
      this.validMessage = "Shipwreck is added. Thank you!";
      this.shipwreckService.createShipwreck(this.shipwreckform.value).subscribe
      (
        data => {
          this.shipwreckform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage = "Please fill out the form before submitting!";
    }

  }

}
