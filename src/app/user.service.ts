import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [];
  constructor(private http: HttpClient) {}
  getUsers() {
    this.users = [...this.users];
    return this.users;
  }
  addUser(user: any) {
    this.users.push(user);
  }
  deleteUser(email: any) {
    this.users = [...this.users.filter((u) => u.email !== email)];
    return this.users;
  }
  getUser(email: string) {
    return [...this.users.filter((u) => u.email === email)];
  }
  editEvent(user: any) {
    const olduser = this.users.indexOf(user);
    this.users.splice(olduser, 1, user);
  }
}
function oldevent(oldevent: any, arg1: number, event: Event | undefined) {
  throw new Error('Function not implemented.');
}
