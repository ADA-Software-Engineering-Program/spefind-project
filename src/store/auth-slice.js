import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: { isAuthenticated: false },
  reducers: {
    setIsLoggedIn(state) {
      state.isAuthenticated = true
    },
    setIsLoggedOut(state) {
      state.isAuthenticated = false
    }
  }
})

export const authActions = authSlice.actions

export default authSlice
