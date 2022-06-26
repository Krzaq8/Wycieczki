import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
		name: null
  },
  reducers: {
    logout: state => {
      state.name = null;
    },
    login: (state, action) => {
      state.name = action.payload;
    }
  }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;