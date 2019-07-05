import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Child51Component } from './child51/child51.component';
import { Child52Component } from './child52/child52.component';
import { AppserveService } from './appserve.service';
import { Parent5Component } from './parent5/parent5.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [Child51Component, Child52Component, Parent5Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [
    Child51Component,
    Child52Component,
    Parent5Component
  ],
  providers : [
    AppserveService
  ],
})
export class Scenario7Module { }
