import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Layout from "./components/Layout.tsx";
import Map from "./pages/Map.tsx";
import Recommended from "./pages/Recommended.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/map" element={<Map />} />
          <Route path="/recommended" element={<Recommended />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
