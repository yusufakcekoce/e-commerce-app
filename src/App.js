import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Header from "./assets/Header";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
