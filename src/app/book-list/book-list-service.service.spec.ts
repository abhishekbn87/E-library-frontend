import { TestBed } from '@angular/core/testing';

import { BookListServiceService } from './book-list-service.service';

describe('BookListServiceService', () => {
  let service: BookListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
