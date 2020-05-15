import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterUserGQL, AuthorizeUserGQL } from 'src/generated/types.graphql-gen';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private register: RegisterUserGQL, private login: AuthorizeUserGQL, private router: Router) { }

  ngOnInit(): void { }

  onRegisterSubmit(form: NgForm) {
    if (form.valid) {
      this.register.mutate(form.value).subscribe(({ data }) => {
        console.log(data);
      });
    }
  }

  onLoginSubmit(form: NgForm) {
    if (form.valid) {
      this.login.mutate(form.value).subscribe(({ data }) => {
        localStorage.setItem('token', data.tokenAuth.token);
        localStorage.setItem('refreshExpiresIn', String(data.tokenAuth.refreshExpiresIn));
        localStorage.setItem('username', data.tokenAuth.payload.username);
        this.router.navigate(['dashboard']);
      });
    }
  }
}
