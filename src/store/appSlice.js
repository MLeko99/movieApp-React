import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  activeTab: "tv",
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setSearchQuery, setActiveTab } = appSlice.actions;
export default appSlice.reducer;
