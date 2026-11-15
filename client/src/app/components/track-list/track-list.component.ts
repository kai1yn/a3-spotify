import { Component, OnInit, Input, inject } from '@angular/core';
import { TrackData } from '../../data/track-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-track-list',
    templateUrl: './track-list.component.html',
    styleUrls: ['./track-list.component.css'],
    standalone: false
})
export class TrackListComponent implements OnInit {
	@Input() tracks:TrackData[] | undefined;
	@Input() hideArtist:boolean = false;
	@Input() hideAlbum:boolean = false;
  service:SpotifyService;
  router:Router;

  constructor() {
      this.service = inject(SpotifyService);
      this.router = inject(Router);
   }

  ngOnInit() {
  }

}
