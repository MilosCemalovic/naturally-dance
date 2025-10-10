import { TestBed } from '@angular/core/testing';

import { ProjectFavoritesService } from './project-favorites.service';

describe('ProjectFavoritesService', () => {
  let service: ProjectFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
