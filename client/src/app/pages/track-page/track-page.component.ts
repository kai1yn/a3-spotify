import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistData } from '../../data/artist-data';
import { TrackData } from '../../data/track-data';
import { AlbumData } from '../../data/album-data';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
    selector: 'app-track-page',
    templateUrl: './track-page.component.html',
    styleUrls: ['./track-page.component.css'],
    standalone: false
    
})
export class TrackPageComponent implements OnInit {
	trackId= '';
	track:TrackData | undefined;
  service:SpotifyService;
    router:Router;

  constructor(private route: ActivatedRoute) { 
    this.service = inject(SpotifyService);
    this.router = inject(Router);
  }

  ngOnInit() {
  	this.trackId = this.route.snapshot.paramMap.get('id')|| '';
  	//TODO: Inject the spotifyService and use it to get the track data
    if (this.trackId) {
        this.service.getTrack(this.trackId).then((data) => {
        this.track = data;
      }

    );}
  }

}
