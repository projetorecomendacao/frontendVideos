import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private _user: User;

  constructor() {
    
  }

  setUser (data:any={}){
    this._user = new User (data);
  }

  getUser(): User { return this._user; }

}

export class User {
  private name: string;
  private email : string;

  constructor(data: any = {}) {
    this.name = data.name;
    this.email = data.email
  }

  getEmail() { return this.email; }
  getName() { return this.name; }

  setEmail(email: string) { this.email = email; }
  setName(name: string) { this.name = name; }
}