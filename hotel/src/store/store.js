import { configureStore } from '@reduxjs/toolkit';
import hotelsSlice from './slice/HotelsSlice'; // Подставьте правильный путь к вашему файлу hotelsSlice

export const store = configureStore({
  reducer: {
    hotels: hotelsSlice,
  },
  devTools: true
});
