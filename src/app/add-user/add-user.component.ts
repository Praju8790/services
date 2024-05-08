import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  userName:string;

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
    this.userservice.statusupdate.subscribe((data)=>{
          alert(data)
    })
  }
  onadduser(){
        this.userservice.adduser(this.userName, 'active');
  }

}
