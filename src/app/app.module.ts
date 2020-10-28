import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoFocusDirectiveDirective } from './auto-focus-directive.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, AutoFocusDirectiveDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
