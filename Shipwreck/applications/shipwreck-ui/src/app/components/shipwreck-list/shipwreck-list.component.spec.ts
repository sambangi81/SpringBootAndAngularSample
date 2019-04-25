import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipwreckListComponent } from './shipwreck-list.component';

describe('ShipwreckListComponent', () => {
  let component: ShipwreckListComponent;
  let fixture: ComponentFixture<ShipwreckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipwreckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipwreckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
