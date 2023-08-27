import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialized: false, 
};

const initSlice = createSlice({
  name: "init",
  initialState,
  reducers: {
    setInitialized: (state) => {
      state.initialized = true;
    },
  },
});

export const { setInitialized } = initSlice.actions;

export default initSlice.reducer;