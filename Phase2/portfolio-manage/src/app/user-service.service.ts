import { Injectable } from '@angular/core';
import { User } from './userModel';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  users: User = {
    firstName: "",
    lastName: "",
    userName: "",
    password: ""
  };

  loinDisplay: boolean = true;
  signUpDisplay: boolean = false;
  portfolioDisplay: boolean = false;
  constructor() { }

  registerService(user: any) {
    console.log(user);
    this.users = user;
  }

  checkUser(user: any): boolean {
    console.log(user);
    if (this.users.userName === user.user) {
      this.loinDisplay = false;
      return true;
    }
    return false;
  }
  setLogin() {
    this.loinDisplay = true;
    this.signUpDisplay = false;
  }
  getLogin() {
    return this.loinDisplay;
  }
  setSignUp() {
    this.signUpDisplay = true;
    this.loinDisplay = false;
  }
  getSignUp() {
    return this.signUpDisplay;
  }
  setPortfolio() {
    this.portfolioDisplay = true;
    this.loinDisplay = false;
  }
  getPortfolio() {
    return this.portfolioDisplay;
  }
  getUser() {
    return this.users;
  }
}
