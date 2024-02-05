# SignalStore


## Store

```typescript
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

type CounterState = {
  count: number;
  interactions: number;
};

const initialState: CounterState = {
  count: 0,
  interactions: 0,
};

export const CounterStore = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods(({ count, interactions, ...store }) => ({
    increment(value: number): void {
      patchState(store, {
        count: count() + value,
        interactions: interactions() + 1,
      });
    },
    decrement(value: number): void {
      patchState(store, {
        count: count() - value,
        interactions: interactions() + 1,
      });
    },
  }))
);
```

### Component

```typescript
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";

import { CounterStore } from "../../store/counter.store";

@Component({
  selector: "app-one",
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: "./one.component.html",
  styleUrl: "./one.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneComponent {
  public counterStore = inject(CounterStore);

  onIncrement(value: number): void {
    this.counterStore.increment(value);
  }
}
```

### Html

```html
<h1>One</h1>

<hr />

<h2>Count: {{ counterStore.count() }}</h2>
<h3>Interactions: {{ counterStore.interactions() }}</h3>

<hr />

<div>
  <button mat-raised-button color="primary" (click)="onIncrement(1)">Increment 1</button>
  <button mat-raised-button color="primary" (click)="onIncrement(2)">Increment 2</button>
  <button mat-raised-button color="primary" (click)="onIncrement(3)">Increment 3</button>
</div>
```



![image](https://github.com/diegopagini/Signal-Store_Angular/assets/62857778/7f76c3d4-879b-4b6f-b6c2-bb6a0f40a6d9)

