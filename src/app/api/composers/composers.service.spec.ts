import { TestBed } from '@angular/core/testing';

import { ComposersService } from './composers.service';

describe('ComposersService', () => {
  let service: ComposersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComposersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
