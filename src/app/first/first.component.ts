import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  firstName = 'Steve'
  lastName = 'Jobs'

  person={
    name: 'person2',
    address: 'mumbai',
    phone: '+919419635663',
    email: 'person2@test.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
