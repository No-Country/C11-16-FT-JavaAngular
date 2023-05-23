import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  formGroup!: FormGroup;

  @Input() rating!: number;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      value: new FormControl(this.rating),
    });
  }
}
