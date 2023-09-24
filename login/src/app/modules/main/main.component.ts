import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-login-main',
  templateUrl: 'main.component.html'
})
export class MainComponent {
  ngVersion = VERSION.full;

  constructor() { }
}
