import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 55 };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
//useSelector şle herhangi bi componentten burda tanımlaıdıgm değişkenlere erişebilrim.
