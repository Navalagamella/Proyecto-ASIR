import { TestBed } from '@angular/core/testing';

import { TokenMedioService } from './token-medio.service';

describe('TokenMedioService', () => {
  let service: TokenMedioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenMedioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
