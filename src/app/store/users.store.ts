import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { lastValueFrom } from 'rxjs';

import { User } from '../interfaces/user.interface';
import { UsersService } from '../services/users.service';

interface UsersState {
  users: User[];
  loading: boolean;
}

const initialState: UsersState = {
  users: [],
  loading: false,
};

export const UsersStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, usersService = inject(UsersService)) => ({
    async getUsers(): Promise<void> {
      patchState(store, { loading: true });
      const users = await lastValueFrom(usersService.getUsers());
      patchState(store, { users, loading: false });
    },
  }))
);
