import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child3Component } from './child3/child3.component';
import { Parent3Component } from './parent3/parent3.component';
import { Parent31Component } from './parent31/parent31.component';

@NgModule({
  declarations: [Child3Component, Parent3Component, Parent31Component],
  imports: [
    CommonModule
  ],
  exports : [
    Child3Component,
    Parent3Component,
    Parent31Component
  ],
})
export class Scenario5Module { }
