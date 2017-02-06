import 'reflect-metadata';
import 'zone.js';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import App from './app';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    App
  ],
  bootstrap: [ App ]
})
class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
