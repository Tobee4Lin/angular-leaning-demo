import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-CountdownTimer',
  templateUrl: './CountdownTimer.component.html',
  styleUrls: ['./CountdownTimer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  seconds = 10;
  intervalId = 0;
  message = '';

  start() {
    this.countDown()
  }

  stop() {
    this.clearTimer();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  ngOnInit() {
    this.start()
  }

  ngOnDestroy() {
    this.clearTimer()
  }

  private countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds--;
      if(this.seconds === 0) {
        this.message = 'boom!';
      } else {
        if(this.seconds < 0) {
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} seconds and counting`;
      }

    }, 1000)
  }

  clearTimer() {
    clearInterval(this.intervalId)
  }

}
