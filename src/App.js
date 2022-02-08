import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Documentary from "./pages/Documentary";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<Documentary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
