import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-artist-page',
    templateUrl: './artist-page.component.html',
    styleUrls: ['./artist-page.component.css'],
    standalone: false
    
})
export class ArtistPageComponent implements OnInit {
	artistId= "";
	artist:ArtistData | undefined;
	topTracks:TrackData[] = [];
	albums:AlbumData[] = [];
  service:SpotifyService;
  router:Router;

  constructor(private route: ActivatedRoute) { 
     this.service = inject(SpotifyService);
     this.router = inject(Router);
  
  }

  ngOnInit() {
     this.artistId = this.route.snapshot.paramMap.get('id') || '';

    if (this.artistId) {
      this.service.getArtist(this.artistId).then((data) => {
        this.artist = data;
      });

      this.service.getTopTracksForArtist(this.artistId).then((data) => {
        this.topTracks = data;
      });

      this.service.getAlbumsForArtist(this.artistId).then((data) => {
        this.albums = data;
      });
    //TODO: Inject the spotifyService and use it to get the artist data, top tracks for the artist, and the artist's albums
  }

}}