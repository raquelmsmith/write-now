import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field-text',
  templateUrl: './form-field-text.component.html',
  styleUrls: ['./form-field-text.component.scss']
})
export class FormFieldTextComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;

  constructor() {}

  ngOnInit() {}
}
