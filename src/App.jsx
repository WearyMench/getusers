import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import Footer from "./components/Footer";
import Nav from "./components/Navigation";

import "./styles/App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
