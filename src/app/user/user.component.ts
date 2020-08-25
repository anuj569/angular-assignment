import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username = "";
  disableButton = true;
  constructor() { }

  ngOnInit(): void {
  }

  resetUsername(){
    this.username = "";
  }

}
