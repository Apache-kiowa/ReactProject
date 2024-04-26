import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  NameSity: "",
  Date: "",
  favoritsidList: [],
  favoritsList: [],
};

const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    addHotels: (state, action) => {
      state.list = [];

      state.list.push(action.payload);
    },

    addNameSity: (state, action) => {
      state.NameSity = "";

      state.NameSity = action.payload;
    },
    addDate: (state, action) => {
      state.Date = {};

      state.Date = action.payload;
    },
    addFavoritesList: (state, action) => {
      const newId = action.payload;
      // Проверяем, есть ли отель с данным id в списке отелей
      const hotelToAdd = state.list[0].find((hotel) => hotel.id === newId);
      if (hotelToAdd) {
        // Проверяем, не содержит ли уже список избранных данный id
        if (!state.favoritsList.some((hotel) => hotel.id === newId)) {
          // Если не содержит, добавляем id в список избранных
          state.favoritsList.push(hotelToAdd);
        }
        // Проверяем, не содержит ли уже список избранных данный id в списке избранных id
        if (!state.favoritsidList.includes(newId)) {
          // Если не содержит, добавляем id в список избранных id
          state.favoritsidList.push(newId);
        }
      }
    },
    removefavoritsid: (state, action) => {
      const newId = action.payload;
      console.log(newId);
      // Удаляем id из списка избранных id
      state.favoritsidList = state.favoritsidList.filter(id => id !== newId);
      // Удаляем отель с соответствующим id из списка избранных отелей
      state.favoritsList = state.favoritsList.filter(hotel => hotel.id !== newId);
    },
  },
});
export const { addHotels, addNameSity, addDate, addFavoritesList, removefavoritsid } =
  hotelsSlice.actions;
export default hotelsSlice.reducer;
