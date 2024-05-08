import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
   logStatus(status:string){
    console.log("login status in the console and the status is "+status)
   }
}
