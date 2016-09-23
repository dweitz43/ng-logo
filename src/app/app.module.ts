import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdModule } from './shared/';
import { DragulaModule } from 'ng2-dragula/ng2-dragula';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdModule.forRoot(),
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
