import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'angular-first-demo';
  heroes = [
    {
      name: 'a',
      age: 11
    },
    {
      name: 'b',
      age: 121
    }
  ];
  voters = ['mike', 'jack']
  agreed = 0;
  disagreed = 0;

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++
  }

}
