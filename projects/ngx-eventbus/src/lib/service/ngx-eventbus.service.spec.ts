import { TestBed } from '@angular/core/testing';

import { NgxEventbusService } from './ngx-eventbus.service';

describe('NgxEventbusService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEventbusService = TestBed.get(NgxEventbusService);
    expect(service).toBeTruthy();
  });
});
