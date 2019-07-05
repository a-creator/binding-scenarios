import { Component, OnInit } from '@angular/core';
import { AppserveService } from '../appserve.service';

@Component({
  selector: 'app-child52',
  templateUrl: './child52.component.html',
  styleUrls: ['./child52.component.css']
})
export class Child52Component implements OnInit {
  user: string;

  constructor(private appserveService: AppserveService ) { }

  ngOnInit() {
    this.appserveService.cast.subscribe(user => this.user = user);
  }
}
