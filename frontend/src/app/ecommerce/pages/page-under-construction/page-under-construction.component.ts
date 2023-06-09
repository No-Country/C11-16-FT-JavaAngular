import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-under-construction',
  templateUrl: './page-under-construction.component.html',
  styleUrls: ['./page-under-construction.component.css'],
})
export class PageUnderConstructionComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 1009);
  }
}
