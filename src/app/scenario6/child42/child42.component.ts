import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child42',
  templateUrl: './child42.component.html',
  styleUrls: ['./child42.component.css']
})
export class Child42Component implements OnInit {
@Input() public parentdata;
  constructor() { }

  ngOnInit() {
  }

}
