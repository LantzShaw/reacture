import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increase(state, action) {
      console.log(action.payload)
    },
    decrease(state, action) {},
  },
})

export const { increase, decrease } = authSlice.actions

export default authSlice.reducer
