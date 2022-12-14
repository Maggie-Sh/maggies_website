import { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import {
  CustomLink,
  HeaderSt,
  IconButton,
  Nav,
  MenuButton,
  NavBackground,
} from "./styled";
import { links } from "./data";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";

const Header = () => {
  const theme = useContext(ThemeContext);
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggle = () => setIsShowMenu((prev) => !prev);
  const handleHideMenu = () => setIsShowMenu(false);

  return (
    <HeaderSt theme={theme?.theme}>
      <MenuButton theme={theme?.theme} onClick={handleToggle}>
        <div />
        <div />
        <div />
      </MenuButton>
      <NavBackground
        className={isShowMenu ? "show" : ""}
        onClick={handleHideMenu}
      >
        <Nav
          theme={theme?.theme}
          className={isShowMenu ? "show" : ""}
          onBlur={handleHideMenu}
        >
          {links.map((link) => (
            <CustomLink key={link.name} theme={theme?.theme} to={link.path}>
              {link.name}
            </CustomLink>
          ))}
        </Nav>
      </NavBackground>
      <IconButton onClick={theme?.toggleTheme} theme={theme?.theme}>
        {theme?.theme.name === "light" ? (
          <LightModeIcon />
        ) : (
          <NightlightRoundIcon className="dark" />
        )}
      </IconButton>
    </HeaderSt>
  );
};

export default Header;
