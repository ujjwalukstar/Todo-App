import {configureStore} from '@reduxjs/toolkit'
import taskReducer from './task/taskSlice.js'

export const store = configureStore({
    reducer: {
      todo: taskReducer},
  }) 