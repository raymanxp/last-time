import { TestBed, inject } from '@angular/core/testing';

import { AddEntryService } from './add-entry.service';

describe('AddEntryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddEntryService]
    });
  });

  it('should be created', inject([AddEntryService], (service: AddEntryService) => {
    expect(service).toBeTruthy();
  }));
});
