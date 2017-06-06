import { TestBed, inject } from '@angular/core/testing';

import { OngService } from './ong.service';

describe('OngService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OngService]
    });
  });

  it('should ...', inject([OngService], (service: OngService) => {
    expect(service).toBeTruthy();
  }));
});
