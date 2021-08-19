import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'portfolio-manage';

  constructor(public userService:UserServiceService){}


}
