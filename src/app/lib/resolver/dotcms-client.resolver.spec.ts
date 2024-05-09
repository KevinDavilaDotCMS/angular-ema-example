import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { dotcmsClientResolver } from './dotcms-client.resolver';

describe('dotcmsClientResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => dotcmsClientResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
