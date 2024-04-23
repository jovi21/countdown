import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Subject, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss'],
  animations: [
    trigger('shakeAnimation', [
      state(
        'start',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'end',
        style({
          transform: 'translateX(50px)', // Cambiamos la distancia a la derecha
        })
      ),
      transition('start <=> end', animate('1s ease-in-out')), // Ajustamos la duración
    ]),
  ],
})
export class ProposalComponent {
  private destroy$: Subject<void> = new Subject<void>();
  shakeTrigger: string = 'start';

  constructor() {}

  ngOnInit(): void {
    interval(5000)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.shakeTrigger = this.shakeTrigger === 'start' ? 'end' : 'start';
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
