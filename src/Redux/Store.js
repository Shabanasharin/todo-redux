import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../slices/TodoSlices';


const Store = configureStore({
    reducer: {
      todos: todoReducer,
    },
  });
  export default Store