import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckViewComponent } from './shipwreck-view.component';

describe('ShipwreckViewComponent', () => {
  let component: ShipwreckViewComponent;
  let fixture: ComponentFixture<ShipwreckViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
