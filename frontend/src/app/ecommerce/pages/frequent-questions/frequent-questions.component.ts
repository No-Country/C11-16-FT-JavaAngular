import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequent-questions',
  templateUrl: './frequent-questions.component.html',
  styleUrls: ['./frequent-questions.component.css'],
})
export class FrequentQuestionsComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 1009);
  }
}
