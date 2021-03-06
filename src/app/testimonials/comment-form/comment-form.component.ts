import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss']
})
export class CommentFormComponent implements OnInit {
  isLinear = false;
  nameGroup: FormGroup;
  emailGroup: FormGroup;
  commentGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {}

  onSubmit() {
    console.log('Form submitted!');
  }
}
