import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckEditComponent } from './shipwreck-edit.component';

describe('ShipwreckEditComponent', () => {
  let component: ShipwreckEditComponent;
  let fixture: ComponentFixture<ShipwreckEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
