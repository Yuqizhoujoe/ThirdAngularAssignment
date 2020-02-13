import { TestBed } from '@angular/core/testing';

import { GetHttpRequestService } from './get-http-request.service';

describe('GetHttpRequestService', () => {
  let service: GetHttpRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHttpRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
