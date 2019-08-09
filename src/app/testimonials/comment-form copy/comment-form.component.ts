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

  ngOnInit() {
    this.nameGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.required]
    });
    this.emailGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.required]
    });
    this.commentGroup = this._formBuilder.group({
      commentCtrl: ['', Validators.required]
    });
  }
}
