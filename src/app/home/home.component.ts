import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUserGQL, AuthorizeUserGQL } from 'src/generated/types.graphql-gen';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(private register: RegisterUserGQL, private login: AuthorizeUserGQL, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      console.log('%cWelcome%c' + localStorage.getItem('username').toUpperCase(), "background: black; color: white; font-size: 40px", "background: red; color: white; font-size: 40px");
      this.router.navigate(['dashboard']);
    }
  }

  onRegisterSubmit() {
    this.loginForm.resetForm()
    if (this.registerForm.valid) {
      this.register.mutate(this.registerForm.value).subscribe(({ data }) => {
        console.log(data);
      }, error => {
        this.registerForm.reset();
      });
    }
  }

  onLoginSubmit() {
    this.registerForm.resetForm()
    if (this.loginForm.valid) {
      this.login.mutate(this.loginForm.value).subscribe(({ data }) => {
        localStorage.setItem('token', data.tokenAuth.token);
        localStorage.setItem('refreshExpiresIn', String(data.tokenAuth.refreshExpiresIn));
        localStorage.setItem('username', data.tokenAuth.payload.username);
        this.router.navigate(['dashboard']);
      }, error => {
        this.loginForm.reset({username: this.loginForm.value.username});
      });
    }
  }
}
