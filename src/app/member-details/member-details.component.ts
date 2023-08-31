import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common-service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  sidenavWidth:number = 15;
  selectedNav:string;
  ngStyle: string;
  users:any = [];
  constructor(private comminService:CommonService) { }

  ngOnInit(): void {
    this.selectedNav = "REQUESTS";
  }
  onselect(event) {
    this.selectedNav =event.target.innerHTML
  }
  getUsers() {
    this.comminService.showUsers().subscribe(response=>{
      this.users = response
    })
  }

}
