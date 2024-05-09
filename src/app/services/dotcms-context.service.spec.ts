import { TestBed } from '@angular/core/testing';

import { DotcmsContextService } from './dotcms-context.service';

describe('DotcmsContextService', () => {
  let service: DotcmsContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotcmsContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
