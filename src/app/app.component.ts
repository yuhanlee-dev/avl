import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'avl';
  isValid = false;
  isFormValid(val) {
    this.isValid = val;
  }
}
