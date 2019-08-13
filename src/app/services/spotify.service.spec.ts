import { TestBed, getTestBed, inject } from '@angular/core/testing';

import { SpotifyService } from './spotify.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { newReleases } from '../mocks/new-releases.json';


describe('SpotifyService', () => {
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let service: SpotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    injector = getTestBed();
    httpMock = injector.get(HttpTestingController);
    service = TestBed.get(SpotifyService);
  });

  afterEach(() => {
    // Verificamos que no haya solicitudes pendientes
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get results', () => {
    const swapiUrl = 'https://api.spotify.com/v1/browse/new-releases';
    service.getNewReleases()
    .subscribe(
      (res) => {
        expect(res).toEqual(newReleases);
      }
    );
    const req = httpMock.expectOne(swapiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(newReleases);
  });
});
