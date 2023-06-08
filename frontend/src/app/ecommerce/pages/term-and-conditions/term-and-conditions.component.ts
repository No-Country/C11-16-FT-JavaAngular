import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term-and-conditions',
  templateUrl: './term-and-conditions.component.html',
  styleUrls: ['./term-and-conditions.component.css'],
})
export class TermAndConditionsComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 1009);
  }
}
