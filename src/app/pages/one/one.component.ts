import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { asapScheduler } from 'rxjs';

import { CounterStore } from '../../store/counter.store';
import { UsersStore } from '../../store/users.store';

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent {
  public counterStore = inject(CounterStore);
  public usersStore = inject(UsersStore);

  constructor() {
    effect(() => {
      console.log(this.counterStore.count());
      if (this.counterStore.count() >= 10) {
        asapScheduler.schedule(() => this.usersStore.getUsers()); // AMAZING
      }
    });
  }

  onIncrement(value: number): void {
    this.counterStore.increment(value);
  }

  getUsers(): void {
    this.usersStore.getUsers();
  }
}
