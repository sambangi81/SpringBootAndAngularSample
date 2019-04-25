import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckCreateComponent } from './shipwreck-create.component';

describe('ShipwreckCreateComponent', () => {
  let component: ShipwreckCreateComponent;
  let fixture: ComponentFixture<ShipwreckCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
