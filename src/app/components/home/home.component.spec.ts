import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { newReleases } from '../../mocks/new-releases.json';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: SpotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports: [HttpClientModule],
      providers: [SpotifyService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SpotifyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a service', () => {
    const newReleasesSpy = spyOn(service, 'getNewReleases').and.callFake( users => {
      return of(newReleases);
    });
    component.ngOnInit();
    expect(newReleasesSpy).toHaveBeenCalled();
  });
});
