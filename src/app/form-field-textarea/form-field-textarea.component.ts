import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-textarea',
  templateUrl: './form-field-textarea.component.html',
  styleUrls: ['./form-field-textarea.component.scss']
})
export class FormFieldTextareaComponent implements OnInit {
  @Input() placeholder: string;
  @Input() id: string;
  constructor() {}

  ngOnInit() {}
}
