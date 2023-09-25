import { RouterModule } from '@angular/router';
import { Injector, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: MainComponent
      }
    ]),
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  declarations: [MainComponent],
  providers: []
})
export class MainModule {
  constructor(private injector: Injector) {
    console.log('Loaded main module of angular-app-version-12');
  }

  ngDoBootstrap() {
    const ce = createCustomElement(MainComponent, {injector: this.injector});
    customElements.define('angular1-element', ce);
  }
}
