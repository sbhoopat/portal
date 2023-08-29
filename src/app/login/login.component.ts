import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { 
    this.myForm(); 
  }

  myForm() {
    this.loginForm = this.fb.group({
      signin: ['', Validators.required ]
    });
 }
  ngOnInit(): void {
  }
  onSubmit() {
    this.router.navigateByUrl('/password');
}
}
