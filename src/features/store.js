import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./movies/movieSlide"

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});