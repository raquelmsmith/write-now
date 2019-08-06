import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  logos: any[] = [
    { name: 'Disney', url: 'assets/images/disney-logo.png' },
    { name: 'Dreamworks', url: 'assets/images/dreamworks-logo.png' },
    { name: 'Lionsgate', url: 'assets/images/lionsgate-logo.png' }
  ];

  constructor() {}

  ngOnInit() {}
}
