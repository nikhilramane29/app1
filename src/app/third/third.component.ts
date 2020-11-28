import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  //1:green,2:red, 3:blue
  boxType = 2
  category =3



  constructor() { }

  ngOnInit(): void {
  }

}
