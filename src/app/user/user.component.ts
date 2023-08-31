import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  constructor(private commonService :CommonService) { }

  ngOnInit(): void {
  }
  

}
