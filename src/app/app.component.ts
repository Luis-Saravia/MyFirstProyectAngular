import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-form';
  name = '';
  lastName = '';
  email = '';
  cel = '';
  country = '';
  city = '';
  viewData = false;

  view() {
    this.viewData = true
  }

  addValue1(event: Event) {
    const word = event.target as HTMLInputElement;
    this.name = word.value
  }

  addValue2(event: Event) {
    const word = event.target as HTMLInputElement;
    this.lastName = word.value
  }

  addValue3(event: Event) {
    const word = event.target as HTMLInputElement;
    this.email = word.value
  }

  addValue4(event: Event) {
    const word = event.target as HTMLInputElement;
    this.cel = word.value
  }

  addValue5(event: Event) {
    const word = event.target as HTMLInputElement;
    this.country = word.value
  }

  addValue6(event: Event) {
    const word = event.target as HTMLInputElement;
    this.city = word.value
  }

  clear() {
    this.name = '',
    this.lastName = '',
    this.email = '',
    this.cel = '',
    this.country = '',
    this.city = '',
    this.viewData = false
  }
}
