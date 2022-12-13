import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

interface AppContextInterface {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<AppContextInterface | null>(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
