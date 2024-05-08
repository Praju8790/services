import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
   
  @Input() user:{name:string,status:string};
  @Input() id:number;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }
  onupdateSatuts(status:string){
    this.userservice.updateSatuts(this.id,status)

  }
}
