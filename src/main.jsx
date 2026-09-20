import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
//Store propsuna kendi oluşturdupumuz redux klasörü altındaki store.jsx dosyasında olan propsu veriyorum
//Amaç bizim App componentimiz Redux Toolkit içinde tanımlamış olduğumuz her şeye erişebilmesi için bunu App componentiyle sarmamız lazım.
//Çünkü zaten bütün uygulama App componentinde olduğu için bütün uygulama da resux ve storeye erişebilir.
