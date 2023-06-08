import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.css'],
})
export class PrivacyPoliciesComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 1009);
  }
}
