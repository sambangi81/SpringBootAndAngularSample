import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipwreck-create-edit',
  templateUrl: './shipwreck-create-edit.component.html',
  styleUrls: ['./shipwreck-create-edit.component.css']
})
export class ShipwreckCreateEditComponent implements OnInit {

  models: string[] = [
    'Good',
    'Fair',
    'Bad',
  ];
  constructor() { }

  ngOnInit() {
  }

}
