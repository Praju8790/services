import { EventEmitter, Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logservice:LogService) { }

  users=[
    {name:'raju',status:'active'},
    {name:'rajugowda',status:'active'},
    {name:'raju',status:'active'},

  ]

  statusupdate =new EventEmitter<string>(); 

  adduser(name:string,status:string){
    this.users.push({name,status})
    this.logservice.logStatus(status)

  }
  updateSatuts(id:number,status:string){
    this.users[id].status=status
    this.statusupdate.emit(status);
    this.logservice.logStatus(status)

  }
}
