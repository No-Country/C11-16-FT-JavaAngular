import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  login: boolean = true;

  handleEvent(event: boolean) {
    this.login = event;
  }
}
