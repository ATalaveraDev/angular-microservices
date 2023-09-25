import { Component, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.less']
})
export class MainComponent {
  ngVersion = VERSION.full;
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  submitHandler(): void {
    console.log('Fake Login under implementation');
  }
}
