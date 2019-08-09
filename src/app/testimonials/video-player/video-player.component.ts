import { Component, OnInit, Input } from '@angular/core';
import { VgAPI } from 'videogular2/compiled/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @Input() videoId: string;
  videoSrc: string;
  videogular: VgAPI;
  constructor() {}

  ngOnInit() {
    this.videoSrc =
      'assets/videos/video-' +
      this.videoId +
      '/MP4/video-' +
      this.videoId +
      '.mp4';
  }

  onPlayerReady(videogular: VgAPI) {
    this.videogular = videogular;
  }
}
