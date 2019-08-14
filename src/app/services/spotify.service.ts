import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {

  }

  getNewReleases(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBlbV02oIZQb6KwIYO2GxLaJzFA66k_6zizj1Ndo0vRREecPhiKZhuPYxtQXk0XC6SacXHXLIGRPjUE17M'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtist(searched: string) {
    const headers = new HttpHeaders({
      Authorization: 'Bearer BQBlbV02oIZQb6KwIYO2GxLaJzFA66k_6zizj1Ndo0vRREecPhiKZhuPYxtQXk0XC6SacXHXLIGRPjUE17M'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${searched}&type=artist&offset=0&limit=20`, { headers });
  }
}
