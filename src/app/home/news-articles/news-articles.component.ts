import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.component.html',
  styleUrls: ['./news-articles.component.scss']
})
export class NewsArticlesComponent implements OnInit {
  articles: string[] = [
    'Does optimized copy really improve conversions?',
    'How to increase newsletter sign-ups by 160% - A Case Study',
    "What is copywriting? A beginner's guide",
    'Why copy matters for search engine optimization',
    '7 tips for crafting strong headlines',
    'How to complement your copy with color'
  ];

  constructor() {}

  ngOnInit() {}
}
