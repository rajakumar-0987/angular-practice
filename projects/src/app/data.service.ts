import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {



  users: string[] = ['Rajakumar', 'Kishore', 'Sanjeev', 'Pranavh'];

  constructor() { }

    getUsers(): string[]{
      return this.users;
    }

    addUser(user: string) : void{
      this.users.push(user);
    }
  }

