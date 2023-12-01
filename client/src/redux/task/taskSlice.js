import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  backTask: {},
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.backTask = { ...state.backTask, ...action.payload };
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action) => {
      // Implement the logic to update the task in the state
      const { id, newText } = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      );
    },
  },
});

export const { addTask, deleteTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
