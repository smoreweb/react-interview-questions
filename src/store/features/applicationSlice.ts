import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store';
import { Todo } from 'shared/types';

export interface ApplicationState {
  todos: Todo[];
  nextId: number;
}

const initialState: ApplicationState = {
  todos: [],
  nextId: 1,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    updateTodos: (state, action) => {
      const { todos } = action.payload;
      state.todos = todos;
    },
    updateNextId: (state, action) => {
      const { nextId } = action.payload;
      state.nextId = nextId;
    },
  },
});

export const { updateTodos, updateNextId } = applicationSlice.actions;

export const applicationState = (state: RootState) => state.application;

export default applicationSlice.reducer;
