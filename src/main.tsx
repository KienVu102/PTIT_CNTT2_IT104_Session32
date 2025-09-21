import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";

// Thay đổi import store tương ứng với bài tập bạn muốn chạy
// Ví dụ:
import { store } from "./components/Ex1/store.ts"; // Cho bài 1
// import { store } from './components/Ex2/store.ts'; // Cho bài 2
// import { store } from './components/Ex3/store.ts'; // Cho bài 3
// import { store } from './components/Ex4/store.ts'; // Cho bài 4
// import { store } from './components/Ex5/store.ts'; // Cho bài 5
// import { store } from './components/Ex6/store.ts'; // Cho bài 6
// import { store } from './components/Ex7/store.ts'; // Cho bài 7
// import { store } from './components/Ex8/store.ts'; // Cho bài 8

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
