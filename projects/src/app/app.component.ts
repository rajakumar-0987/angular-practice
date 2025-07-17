import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newUser : string = '';
  users: string[] = [];

  constructor(private dataService: DataService){}

  addUser(){
    if (this.newUser.trim()){
      this.dataService.addUser(this.newUser);
      this.newUser = '';
      this.users = this.dataService.getUsers();

    }
  }


  ngOnInit(): void {
    this.users = this.dataService.getUsers();
  }

  title = 'product-list';
  products = [
    {id : 1, name : 'laptop', price : 10000},
    {id : 2, name : 'smartphone', price : 9000},
    {id : 3, name : 'Headset', price : 1000},
    {id : 4, name : 'montior', price : 100000}
  ];
  name : string = '';
  currentDate : Date = new Date();
  message : string = "Hello From Angular";
  isDisabled: boolean = true;
  isLoggedIn = false;
  isVisible = true;
  logMessage(){
    console.log('Button Clicked,iam',this.name);
  }

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }

   getBackgroundColor() {
    return this.isLoggedIn ? 'green' : 'red';
  }
  
}
