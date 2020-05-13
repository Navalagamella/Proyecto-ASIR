import { TestBed } from '@angular/core/testing';

import { PrivadoService } from './privado.service';

describe('PrivadoService', () => {
  let service: PrivadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrivadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
