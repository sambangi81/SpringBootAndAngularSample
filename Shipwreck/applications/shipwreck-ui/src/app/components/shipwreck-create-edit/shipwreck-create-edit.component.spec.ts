import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckCreateEditComponent } from './shipwreck-create-edit.component';

describe('ShipwreckCreateEditComponent', () => {
  let component: ShipwreckCreateEditComponent;
  let fixture: ComponentFixture<ShipwreckCreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckCreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
