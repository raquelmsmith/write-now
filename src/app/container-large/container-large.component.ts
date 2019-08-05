import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-large',
  templateUrl: './container-large.component.html',
  styleUrls: ['./container-large.component.scss']
})
export class ContainerLargeComponent implements OnInit {
  @Input() multiDot: boolean;
  constructor() {}

  ngOnInit() {}
}
