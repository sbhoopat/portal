import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {
  userForm: FormGroup;
  users: any =[]; 
  constructor(private fb: FormBuilder,private comminService:CommonService) { 
    this.myForm(); 
  }
  myForm() {
    this.userForm = this.fb.group({
      agency: ['', Validators.required ],
      memberId: ['', Validators.required ],
      caseManager: ['', Validators.required ]
    });
 }
 ngOnInit(): void {
  }
  onSubmit(){
  }
  getUsers() {
    this.comminService.showUsers().subscribe(response=>{
      this.users = response
    })
  }

}
