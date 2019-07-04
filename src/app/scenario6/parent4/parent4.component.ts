import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent4',
  templateUrl: './parent4.component.html',
  styleUrls: ['./parent4.component.css']
})
export class Parent4Component implements OnInit {
public myname = '';
  constructor() { }

  ngOnInit() {
  }

  mymessage(value) {
this.myname = value;
  }

}
