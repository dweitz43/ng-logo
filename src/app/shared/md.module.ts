import { NgModule, ModuleWithProviders }      from '@angular/core';

import { MdCoreModule } from '@angular2-material/core';
import { MdButtonModule } from '@angular2-material/button';
import { MdButtonToggleModule } from '@angular2-material/button-toggle';
import { MdCardModule } from '@angular2-material/card';
import { MdIconModule } from '@angular2-material/icon';
import { MdToolbarModule } from '@angular2-material/toolbar';

@NgModule({
  imports: [
    MdCoreModule.forRoot(),
    MdButtonModule.forRoot(),
    MdButtonToggleModule.forRoot(),
    MdCardModule.forRoot(),
    MdIconModule.forRoot(),
    MdToolbarModule.forRoot(),
  ],
  exports: [
    MdCoreModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdIconModule,
    MdToolbarModule
  ]
})

export class MdModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MdModule
    };
  }
}
