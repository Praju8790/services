import { Component } from '@angular/core';
import {UserService} from './services/user.service'
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  users:{name:string,status:string}[]=[]
  constructor(private userservice:UserService){

  }
  ngOnInit(): void {
    this.users= this.userservice.users;
  }
}
