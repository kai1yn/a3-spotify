import { Component, OnInit, Input, inject } from '@angular/core';
import { ResourceData } from '../../data/resource-data';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-carousel-card',
    templateUrl: './carousel-card.component.html',
    styleUrls: ['./carousel-card.component.css'],
    standalone: false 
})

export class CarouselCardComponent implements OnInit {
  @Input() resource:ResourceData | undefined ;
  service:SpotifyService;
  router:Router;

  constructor() {
     this.service = inject(SpotifyService);
     this.router = inject(Router);
  }

  ngOnInit() {
  }

 onClickResource(): void {
    if (this.resource) {
      this.router.navigate([this.resource.category, this.resource.id]);
    }
}}
