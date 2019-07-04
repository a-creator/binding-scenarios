import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child41Component } from './child41/child41.component';
import { Child42Component } from './child42/child42.component';
import { Parent4Component } from './parent4/parent4.component';

@NgModule({
  declarations: [Child41Component, Child42Component, Parent4Component ],
  imports: [
    CommonModule
  ],
  exports : [
    Child41Component,
    Child42Component,
    Parent4Component
  ]
})
export class Scenario6Module { }
