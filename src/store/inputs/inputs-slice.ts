import { createSlice } from "@reduxjs/toolkit";

export interface inputInitialState {
  name: string;
  email: string;
  title: string;
  description: string;
}

const initialState: inputInitialState = {
  name: "",
  email: "",
  title: "",
  description: "",
};

const inputsSlice = createSlice({
  name: "inputs",
  initialState,
  reducers: {
    handleChange: (state: any, action) => {
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
