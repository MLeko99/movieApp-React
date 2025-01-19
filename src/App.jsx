import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/Home";
import Header from "./components/Header";
import "./index.css";

const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tv" />} />
        <Route path="/movies" element={<Home activeTab="movies" />} />
        <Route path="/tv" element={<Home activeTab="tv" />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
