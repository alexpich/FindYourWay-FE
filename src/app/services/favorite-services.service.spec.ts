import { TestBed, inject } from '@angular/core/testing';

import { FavoriteServicesService } from './favorite-services.service';

describe('FavoriteServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavoriteServicesService]
    });
  });

  it('should be created', inject([FavoriteServicesService], (service: FavoriteServicesService) => {
    expect(service).toBeTruthy();
  }));
});
