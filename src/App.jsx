import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Portraits from "./pages/Portraits";
import Acrylic from "./pages/Acrylic";
import Murals from "./pages/Murals";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/acrylic" element={<Acrylic />} />
            <Route path="/murals" element={<Murals />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;