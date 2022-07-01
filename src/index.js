import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import ChapterPage from "./pages/ChapterPage";
import ListChapter from "./components/ListChapter";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path={"/"} element={<App />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/chapter"} element={<ChapterPage />}>
            <Route path={"/chapter/lists"} element={<ListChapter />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
