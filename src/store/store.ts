import { configureStore } from "@reduxjs/toolkit";
import inputsSlice from "./inputs/inputs-slice";

const store = configureStore({
  reducer: {
    inputs: inputsSlice.reducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
