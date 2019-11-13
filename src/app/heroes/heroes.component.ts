import { Component, OnInit, Input } from '@angular/core';

import { Hero } from "./heroes"

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'heroes'

  @Input() heroes: Hero;

  constructor() {

  }

  ngOnInit() {
  }

}
