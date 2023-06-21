import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  title: "",
  description: "",
};

const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetInputs: (state) => {
      state.name = "";
      state.email = "";
      state.title = "";
      state.description = "";
    },
  },
});

export const { handleChange, resetInputs } = inputsSlice.actions;

export default inputsSlice;
