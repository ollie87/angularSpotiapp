import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];

  constructor(private spotify: SpotifyService) {}

  ngOnInit() {
    this.spotify.getNewReleases().subscribe((data: any) => {
      this.newReleases = data.albums.items;
    });
  }

}
