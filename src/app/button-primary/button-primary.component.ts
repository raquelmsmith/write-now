import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() text: string;
  @Input() target: string;
  @Input() type: string;
  constructor() {}

  ngOnInit() {}
}
