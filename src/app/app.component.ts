import { CountdownTimerComponent } from './CountdownTimer/CountdownTimer.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements AfterViewInit {

  @ViewChild(CountdownTimerComponent, { static: false })
  private timerComponent: CountdownTimerComponent

  ngAfterViewInit(): void {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  seconds() {
    return 0;
  }
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

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
  currentText = {
    content: "mmm"
  }

  onVoted(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++
  }



}
