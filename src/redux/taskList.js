import { createSlice } from '@reduxjs/toolkit'

let tasks = []

export const taskListSlice = createSlice({
  name: 'taskList',
  initialState: {
    items: tasks,
  },
  //initialState,
  reducers: {
    updateTask: (state, action) => {
      // let newTasks = state.items
      // newTasks.push(action.payload)
      // state.items = newTasks;
      state.items[action.payload.index] = action.payload.newData
    },
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
export const { addTaskToList, removeTaskFromList, updateTask } = taskListSlice.actions

export default taskListSlice.reducer