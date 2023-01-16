import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import Contacts from "./pages/contacts";
import { Theme, light, dark } from "./theme/theme";
import { Container, Main } from "./shared/styled";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Footer from "./components/footer";
import NotFound from "./pages/not-found";
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

  const isShowMenu = useSelector((state: RootState) => state.isShowMenu);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Container
          theme={theme}
          className={isShowMenu ? "overflow-hidden" : "overflow-overlay"}
        >
          <Header />
          <Main theme={theme}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Main>
          <Footer />
        </Container>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
