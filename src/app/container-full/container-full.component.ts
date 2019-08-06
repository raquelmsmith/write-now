import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container-full',
  templateUrl: './container-full.component.html',
  styleUrls: ['./container-full.component.scss']
})
export class ContainerFullComponent implements OnInit {
  @Input() multiDot: boolean;
  constructor() {}

  ngOnInit() {}
}
