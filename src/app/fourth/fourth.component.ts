import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {

// 1: red
// 2: green
// 3: yellow
// 4: brown
// 5: blue

  boxType = 1

  constructor() { }

  ngOnInit(): void {
  }

  // changeColorRed() { this.boxType = 1 }
  // changeColorGreen() { this.boxType = 2 }
  // changeColorYellow() { this.boxType = 3 }
  // changeColorBrown() { this.boxType = 4 }
  // changeColorBlue() { this.boxType =  5 }

  changeColor(color) { this.boxType =  color }
  
  handleClick(){
    alert('button Clicked..')
  }

}
