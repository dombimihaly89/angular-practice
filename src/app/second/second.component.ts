import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  @Input('elementsInSecondComponent')
  elements: any;

  newValue: string;

  @Output()
  valueSend = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  sendValueToFirstComponent() {
    this.valueSend.emit(this.newValue);
    this.newValue = "";
  }

}
