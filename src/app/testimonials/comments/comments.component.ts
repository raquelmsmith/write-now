import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: any = [
    {
      author: 'Karen Meyer',
      comment:
        "So cool to hear about how Write Now! changed Christine's conversion rates - just with the copy! "
    },
    {
      author: 'Phillip Moore',
      comment:
        "I loved hearing Christine's story. What an amazing turnaround for her business. Congrats!"
    },
    {
      author: 'Pablo Esteban',
      comment:
        'This was really interesting. Congrats on the success, Christine and Write Now!'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
