import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello World!!!</h1>
    <h2>{{ message }}</h2>
  `
})
export default class App {
  constructor() {
    this.message = "This is cool!";
  }
};
