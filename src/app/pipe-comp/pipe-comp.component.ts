import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-comp',
  templateUrl: './pipe-comp.component.html',
  styleUrls: ['./pipe-comp.component.less']
})
export class PipeCompComponent implements OnInit {

  constructor() { }

  public birthday = new Date(1997, 5, 6);
  public isToggle = true;

  get format() {
    return this.isToggle ? "shortDate" : "fullDate"
  }

  toggleFormat() {
    this.isToggle = !this.isToggle;
  }

  ngOnInit() {
  }

}
