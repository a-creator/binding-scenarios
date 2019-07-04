import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit {
@Output() public eventchild = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
logme(value) {
this.eventchild.emit(value);
}
}
