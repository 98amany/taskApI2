import { TestBed } from '@angular/core/testing';

import { GetReqService } from './get-req.service';

describe('GetReqService', () => {
  let service: GetReqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetReqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
