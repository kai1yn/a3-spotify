import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-album-page',
    templateUrl: './album-page.component.html',
    styleUrls: ['./album-page.component.css'],
    standalone: false
})
export class AlbumPageComponent implements OnInit {
	albumId= '';
	album:AlbumData | undefined;
	tracks:TrackData[] | undefined;
  service:SpotifyService;
  router:Router;


  constructor(private route: ActivatedRoute) { 
    this.service = inject(SpotifyService);
    this.router = inject(Router);
  }

  ngOnInit() {
    this.albumId = this.route.snapshot.paramMap.get('id') || '';

    if (this.albumId) {
      this.service.getAlbum(this.albumId).then((data) => {
        this.album = data;
      });

    //TODO: inject spotifyService and use it to get the album data and the tracks for the album
  }

}}
