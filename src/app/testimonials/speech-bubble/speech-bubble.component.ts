import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-speech-bubble',
  templateUrl: './speech-bubble.component.html',
  styleUrls: ['./speech-bubble.component.scss']
})
export class SpeechBubbleComponent implements OnInit {
  @Input() color: String = 'pink';
  @Input() position: String = 'top';
  @Input() cite: String = 'Anonymous';
  constructor() {}

  ngOnInit() {}
}
