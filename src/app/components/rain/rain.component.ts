import { Component } from '@angular/core';

@Component({
  selector: 'app-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss'],
})
export class RainComponent {
  raindrops: { left: number; delay: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    this.generateRain();
  }

  generateRain() {
    for (let i = 0; i < 50; i++) {
      this.raindrops.push({
        left: Math.random() * window.innerWidth,
        delay: Math.random() * 2 + 's',
      });
    }
  }
}
