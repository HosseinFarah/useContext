import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Contact } from "./Components/Contact";
import { About } from "./Components/About";
import Navbar from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import Notfound from "./Components/Notfound";
import { createContext, useState } from "react";
import { Profile } from "./Components/Profile";

export const profileName = createContext();

function App() {
  const [username, setUsername] = useState("Hossein Farah");
  return (
    <div className="App">
      <profileName.Provider value={{ username, setUsername }}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile/" element={<Profile />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </profileName.Provider>
    </div>
  );
}
export default App;
