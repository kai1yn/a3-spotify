import { Component, inject, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css'],
    standalone: false
})
export class AboutComponent implements OnInit {
  name:string = "";
  profile_pic:string = "assets/unknown.jpg";
  profile_link:string = "";
  service:SpotifyService;

  //TODO: inject the Spotify service
  constructor() {
    this.service = inject(SpotifyService);
  }

  ngOnInit() {
  }
  
  
  onClickAboutMe(): void {
    this.service.aboutMe().then((profile) => {
      this.name = profile.name;
      this.profile_pic = profile.imageURL;
      this.profile_link = profile.spotifyProfile;
    });
  }
   /*TODO: create a function which gets the "about me" information from Spotify when the button in the view is clicked.
  In that function, update the name, profile_pic, and profile_link fields */

}
