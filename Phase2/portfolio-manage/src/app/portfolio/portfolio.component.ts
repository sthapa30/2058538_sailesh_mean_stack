import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { User } from '../userModel';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  name: string = "";
  contacts: any = [];
  flag: boolean = false;
  isOff: boolean = true;
  dash: boolean = false;

  portfolio = new FormGroup({
    contact: new FormControl(),
    phone: new FormControl()
  })

  constructor(public userService: UserServiceService) { }

  ngOnInit(): void {
    //console.log("portfolio");
    let user: User = this.userService.getUser();
    this.name = user.firstName + ' ' + user.lastName;
  }

  onSave() {
    this.flag = true;
    let contactInfo = this.portfolio.value;
    this.contacts.push(contactInfo);

  }

}
