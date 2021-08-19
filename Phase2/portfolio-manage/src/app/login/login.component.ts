import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    user: new FormControl("", [Validators.required]),
    pass: new FormControl("", [Validators.required])
  })

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {

  }

  checkUser() {
    //console.log('hello from Login');
    let login = this.loginRef.value;
    let loginSucess = this.userService.checkUser(login);
    if (loginSucess) {
      this.userService.setPortfolio();
    } 

  }

  signUp(setSignUp: boolean) {

  }

}
