import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./auth-slice"
const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    const result = next(action)
    localStorage.setItem("applicationState", JSON.stringify(getState()))
    return result
  }
}

const reHydrateStore = () => {
  if (localStorage.getItem("applicationState") !== null) {
    return JSON.parse(localStorage.getItem("applicationState")) // re-hydrate the store
  }
}

const store = configureStore({
  reducer: { auth: authSlice.reducer },
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware)
})

export default store
