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
      Authorization: 'Bearer BQDQJE860PLv84cmsOAsCMuHwiiDVnAlQsvPQa8gG47F36oAm2UPFqMd_F40C5dzB-2mZebHjMa203J3OzY'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
