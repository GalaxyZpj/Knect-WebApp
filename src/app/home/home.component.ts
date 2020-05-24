import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    this.loginForm.resetForm()
    if (this.registerForm.valid) {
      this.auth.register(this.registerForm.value).subscribe(error => {
        this.registerForm.reset();
        throw(error);
      });
    }
  }

  onLoginSubmit() {
    this.registerForm.resetForm()
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(() => {
        this.router.navigate(['dashboard']);
      }, error => {
        this.loginForm.reset({username: this.loginForm.value.username});
        throw(error);
      });
    }
  }
}
