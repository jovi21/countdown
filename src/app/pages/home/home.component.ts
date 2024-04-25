import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  endDate = new Date('2024-04-26T20:00:00');

  hideRain(): boolean {
    const now = new Date();
    const isToday =
      now.getDate() === this.endDate.getDate() &&
      now.getMonth() === this.endDate.getMonth() &&
      now.getFullYear() === this.endDate.getFullYear() &&
      now.getHours() === this.endDate.getHours() &&
      now.getMinutes() === this.endDate.getMinutes() &&
      now.getSeconds() === this.endDate.getSeconds();
    return isToday;
  }
}
