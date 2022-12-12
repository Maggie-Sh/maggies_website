import React, { useState, createContext } from "react";

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
      <div>Welcome</div>
    </ThemeContext.Provider>
  );
}

export default App;
