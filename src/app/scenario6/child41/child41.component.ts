import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child41',
  templateUrl: './child41.component.html',
  styleUrls: ['./child41.component.css']
})
export class Child41Component implements OnInit {
@Output() public evechild = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  logmessage(value) {
    this.evechild.emit(value);
  }

}
