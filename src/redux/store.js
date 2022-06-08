import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
// import counterReducer from './counter'
// import loginInfoReducer from './loginInfo'
// import queryReducer from './query'
import taskListReducer from './taskList'
import tasksCompletedListReducer from './tasksCompletedList';
import SetTransform from './setTransform';


//create a local storage
const persistConfig = {
  key: 'main-root',
  storage,
  transforms: [SetTransform]
}

const allReducers = combineReducers({
  // counter: counterReducer,
  // loginInfo: loginInfoReducer,
  // query: queryReducer,
  taskList: taskListReducer,
  tasksCompletedList: tasksCompletedListReducer,
})

export const persistedReducer = persistReducer(persistConfig, allReducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})
export default store