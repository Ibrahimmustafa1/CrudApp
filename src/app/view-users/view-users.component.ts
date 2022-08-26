import { UserService } from './../user.service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.css'],
})
export class ViewUsersComponent implements OnInit {
  users: any;
  constructor(private user: UserService) {}

  ngOnInit(): void {
    this.users = this.user.getUsers();
  }

  delete(email: any) {
    this.users = this.user.deleteUser(email);
  }
}
