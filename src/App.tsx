import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Contacts from "./pages/contacts";
import { Theme, light, dark } from "./theme/theme";

export interface AppContextInterface {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((prev) => (prev === light ? dark : light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
