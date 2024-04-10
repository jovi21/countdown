import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() endDate!: Date;
  timeLeft: any;
  interval: any;

  constructor() {}

  ngOnInit(): void {
    this.calculateTimeLeft();
    this.interval = setInterval(() => {
      this.calculateTimeLeft();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  calculateTimeLeft(): void {
    const now = new Date().getTime();
    const difference = this.endDate.getTime() - now;

    if (difference <= 0) {
      this.timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
      clearInterval(this.interval);
    } else {
      this.timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }
  }
}
