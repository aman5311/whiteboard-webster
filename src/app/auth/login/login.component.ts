import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';
import { LoginService } from './login.service';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
   public router : Router,) { }
  loginForm: FormGroup;
  displayPassword: boolean = false;
  
  ngOnInit(): void {
        
    this.loginForm = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required],
      // remembarMe: false,
    });
  }
  get loginControl() { return this.loginForm.controls; }

  login() {
    this.router.navigateByUrl('');
  }
  
  /** get emailId  from login form */
  get emailId() {
    return this.loginForm.get('emailId');
  }

   /** get password  from login form */
  get password() {
    return this.loginForm.get('password');
  }
  

}
