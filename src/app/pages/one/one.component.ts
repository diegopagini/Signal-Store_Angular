import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

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

  onIncrement(value: number): void {
    this.counterStore.increment(value);
  }

  getUsers() {
    this.usersStore.getUsers();
  }
}
