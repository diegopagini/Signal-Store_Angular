import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

interface CounterState {
  count: number;
  interactions: number;
}

const initialState: CounterState = {
  count: 0,
  interactions: 0,
};

export const CounterStore = signalStore(
  { providedIn: 'root' },
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
