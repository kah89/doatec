import { TestBed, inject } from '@angular/core/testing';

import { ModalidadesService } from './modalidades.service';

describe('ModalidadesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModalidadesService]
    });
  });

  it('should be created', inject([ModalidadesService], (service: ModalidadesService) => {
    expect(service).toBeTruthy();
  }));
});
