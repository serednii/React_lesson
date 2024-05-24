import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import categoriesReducer from './categoriesSlice';


export default configureStore({
  reducer: {
    todos: todoReducer,
    category: categoriesReducer,
  },
});