import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import VideoDetails from '../../assets/videos/video-details.json';
import { Testimonial } from '../_models/testimonial.js';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  allVideos = VideoDetails.videos;
  currentVideoId: string;
  currentVideoDetails: Testimonial;
  otherVideos;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.currentVideoId = params.get('id');
      this.currentVideoDetails = this.allVideos.find(
        video => video.id === parseInt(this.currentVideoId)
      );
      this.otherVideos = this.allVideos.filter(
        video => video.id !== parseInt(this.currentVideoId)
      );
    });
  }
}
