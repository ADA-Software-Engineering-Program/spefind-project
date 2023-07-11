import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./index.css"
import App from "./App"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
