import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ChapterPage from "./pages/ChapterPage";
import Chapter2 from "./components/Chapter2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/chapter"} element={<ChapterPage />}>
            <Route path={"/chapter/2"} element={<Chapter2 />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
