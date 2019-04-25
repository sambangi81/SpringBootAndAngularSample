import { TestBed, inject } from '@angular/core/testing';

import { ShipwreckService } from './shipwreck.service';

describe('ShipwreckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipwreckService]
    });
  });

  it('should be created', inject([ShipwreckService], (service: ShipwreckService) => {
    expect(service).toBeTruthy();
  }));
});
