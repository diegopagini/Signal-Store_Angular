import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { CounterStore } from '../../store/counter.store';

@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TwoComponent {
  public counterStore = inject(CounterStore);

  onDecrement(value: number): void {
    this.counterStore.decrement(value);
  }
}
