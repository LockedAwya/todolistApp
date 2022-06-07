import { createSlice } from '@reduxjs/toolkit'

let tasks = []

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    items: tasks,
  },
  //initialState,
  reducers: {
    addTaskToList: (state, action) => {
      let newTasks = state.items
      newTasks.push(action.payload)
      state.items = newTasks;
    },
    removeTaskFromList: (state, action) => {
      let newTasks = state.items;
      newTasks.splice(action.payload.index, 1);
      state.items = newTasks;
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTaskToList, removeTaskFromList } = taskListSlice.actions

export default taskListSlice.reducer