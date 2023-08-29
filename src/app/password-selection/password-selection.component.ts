import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-selection',
  templateUrl: './password-selection.component.html',
  styleUrls: ['./password-selection.component.scss']
})
export class PasswordSelectionComponent implements OnInit {
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router) { }
  myForm() {
    this.passwordForm = this.fb.group({
      signin: ['', Validators.required ]
    });
 }
  ngOnInit(): void {
  }

  onBack() {
    this.router.navigateByUrl('/password');
}
onSubmit() {
  this.router.navigateByUrl('/password');
}

}
