import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navItems = [
    { label: 'Services', target: '/services' },
    { label: 'Testimonials', target: '/testimonials' },
    { label: 'Company', target: '/company' },
    { label: 'Contact', target: '/contact' }
  ];

  constructor() {}

  ngOnInit() {}
}
