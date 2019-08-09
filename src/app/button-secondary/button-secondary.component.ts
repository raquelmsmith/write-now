import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-secondary',
  templateUrl: './button-secondary.component.html',
  styleUrls: ['./button-secondary.component.scss']
})
export class ButtonSecondaryComponent implements OnInit {
  @Input() text: string;
  @Input() routerLink: string;
  constructor() {}

  ngOnInit() {}
}
