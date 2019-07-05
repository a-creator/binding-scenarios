import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppserveService {
private user = new BehaviorSubject<string>(' ');
cast = this.user.asObservable();
  constructor() { }
  editUser(newUser) {
    this.user.next(newUser);
  }
}
