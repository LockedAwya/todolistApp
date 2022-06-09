import { createSlice } from '@reduxjs/toolkit'

let completedTasks = []

export const tasksCompletedListSlice = createSlice({
  name: 'tasksCompletedList',
  initialState: {
    items2: completedTasks,
  },
  //initialState,
  reducers: {
    addTask: (state, action) => {
      let newTasks = state.items2
      newTasks.push(action.payload.task)
      state.items2 = newTasks;
    },
    removeTask: (state, action) => {
      let newTasks = state.items2;
      newTasks.splice(action.payload.index, 1);
      state.items2 = newTasks;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTask, removeTask } = tasksCompletedListSlice.actions

export default tasksCompletedListSlice.reducer