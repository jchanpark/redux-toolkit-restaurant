import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  value: []
}

export const reservationsSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {}
  }
})

export default reservationsSlice.reducer;