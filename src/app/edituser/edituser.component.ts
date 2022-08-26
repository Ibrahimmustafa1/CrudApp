import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  constructor(
    private userService: UserService,
    private ActivatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  public user: any;
  userForm!: FormGroup;

  update(userForm: FormGroup) {
    this.userService.editEvent(userForm.value);
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.user = this.userService.getUser(
      this.ActivatedRoute.snapshot.params.email
    );
    console.log(this.user);
    this.userForm = new FormGroup({
      userName: new FormControl(this.user[0].userName, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
      email: new FormControl(this.user[0].email, [
        Validators.required,
        Validators.email,
      ]),
      phone: new FormControl(this.user[0].phone, [
        Validators.required,
        Validators.pattern('^[0-9]{10}$'),
      ]),
      address: new FormControl(this.user[0].address, Validators.required),
    });
  }
}
