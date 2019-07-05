import { Component, OnInit } from '@angular/core';
import { AppserveService } from '../appserve.service';

@Component({
  selector: 'app-child51',
  templateUrl: './child51.component.html',
  styleUrls: ['./child51.component.css']
})
export class Child51Component implements OnInit {
  user: string;
  editUser: string;
  constructor(private appserveService: AppserveService ) { }

  ngOnInit() {
    this.appserveService.cast.subscribe(user => this.user = user);
  }
  onclick() {
    this.appserveService.editUser(this.editUser);
  }

}
