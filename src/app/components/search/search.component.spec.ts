import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { HttpClientModule } from '@angular/common/http';
import { SpotifyService } from '../../services/spotify.service';
import { searchArtist } from '../../mocks/searchArtists.json';
import { of } from 'rxjs';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let service: SpotifyService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [HttpClientModule],
      providers: [SpotifyService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    service = TestBed.get(SpotifyService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call a service', () => {
    const searchArtistSpy = spyOn(service, 'getArtist').and.callFake(users => {
      return of(searchArtist);
    });
    component.search('slash');
    expect(searchArtistSpy).toHaveBeenCalled();
  });
});
