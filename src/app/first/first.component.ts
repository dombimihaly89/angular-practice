import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  firstNumber: string;
  secondNumber: string;
  sumOfTwoNumbers: number;
  sumVisible: boolean = false;

  checked: boolean = false;
  elements = [];
  element = "";
  canAddMoreElements: boolean = true;


  constructor(private router: Router) { }

  ngOnInit() {
  }

  sum() {
    this.sumOfTwoNumbers = parseInt(this.firstNumber) + parseInt(this.secondNumber);
    this.sumVisible = true;
  }

  add() {
    this.elements.push(this.element);
    this.element = "";
    console.log(this.elements);
    if (this.elements.length > 4) {
      this.canAddMoreElements = false;
    }
  }

  addValueFromSecondComponent(value) {
    this.elements.push(value);
  }

  navigate(url: string) {
    this.router.navigateByUrl(url);
  }
}
