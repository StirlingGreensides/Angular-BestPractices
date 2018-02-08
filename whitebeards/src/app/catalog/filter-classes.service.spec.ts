import { TestBed, inject } from '@angular/core/testing';

import { FilterClassesService } from './filter-classes.service';

describe('FilterClassesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FilterClassesService]
    });
  });

  it('should be created', inject([FilterClassesService], (service: FilterClassesService) => {
    expect(service).toBeTruthy();
  }));
});
