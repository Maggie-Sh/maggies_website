import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { CustomLink, HeaderSt } from "./styled";
import { links } from "./data";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import { IconButton } from "../../styled";

const Header = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  return (
    <HeaderSt className={`${theme?.theme}`}>
      <div className="side">
        {links.map((link) => (
          <CustomLink key={link.name} theme={theme?.theme} to={link.path}>
            {link.name}
          </CustomLink>
        ))}
      </div>
      <div className="side">
        <IconButton onClick={theme?.toggleTheme} theme={theme?.theme}>
          {theme?.theme === "light" ? (
            <LightModeIcon />
          ) : (
            <NightlightRoundIcon />
          )}
        </IconButton>
      </div>
    </HeaderSt>
  );
};

export default Header;
