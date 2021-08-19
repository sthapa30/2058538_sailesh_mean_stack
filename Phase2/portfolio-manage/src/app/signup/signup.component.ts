import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import {User} from '../userModel';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupRef = new FormGroup({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    userName: new FormControl("",[Validators.required]),
    pass: new FormControl("",[Validators.required])

  })

  constructor(public userService:UserServiceService) { }

  ngOnInit(): void {
  }

  registerUser(){
    let user = this.signupRef.value;
    console.log(user);
    this.userService.registerService(user);
    this.userService.setLogin();

  }
  getUser(){
    let users:User =  this.userService.getUser();
    console.log(users);
  }

}
