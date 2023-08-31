import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-password-selection',
  templateUrl: './password-selection.component.html',
  styleUrls: ['./password-selection.component.scss']
})
export class PasswordSelectionComponent implements OnInit {
  passwordForm: FormGroup;
  constructor(private fb: FormBuilder,private router: Router,
    private _location: Location) { 
      this.myForm(); 
    }
  myForm() {
    this.passwordForm = this.fb.group({
      signin: ['', Validators.required ]
    });
 }
  ngOnInit(): void {
    this.passwordForm.controls.proof.patchValue('');
  }
  onBack() {
    // this.router.navigateByUrl('/login');
    this.router.navigate(['/login']);
}
onSubmit() {
  // this.router.navigateByUrl('/memebr');
  this.router.navigate(['/memebr']);
}

}
