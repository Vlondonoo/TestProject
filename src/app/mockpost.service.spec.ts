import { TestBed } from '@angular/core/testing';

import { MockpostService } from './mockpost.service';

describe('MockpostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockpostService = TestBed.get(MockpostService);
    expect(service).toBeTruthy();
  });
});
