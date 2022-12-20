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
import CloseIcon from "@mui/icons-material/Close";
import { AppContextInterface } from "../../App";

const Header = () => {
  const { theme, toggleTheme } = useContext(
    ThemeContext
  ) as AppContextInterface;

  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleToggle = () => setIsShowMenu((prev) => !prev);
  const handleHideMenu = () => setIsShowMenu(false);

  return (
    <HeaderSt theme={theme}>
      <MenuButton theme={theme} onClick={handleToggle}>
        <div />
        <div />
        <div />
      </MenuButton>
      <NavBackground
        className={isShowMenu ? "show" : ""}
        onClick={handleHideMenu}
      >
        <Nav theme={theme} className={isShowMenu ? "show" : ""}>
          <IconButton className="close" theme={theme} onClick={handleHideMenu}>
            <CloseIcon />
          </IconButton>
          {links.map((link) => (
            <CustomLink
              key={link.name}
              theme={theme}
              to={link.path}
              onClick={handleHideMenu}
              tabIndex={!isShowMenu ? -1 : 0}
            >
              {link.name}
            </CustomLink>
          ))}
        </Nav>
      </NavBackground>
      <IconButton onClick={toggleTheme} theme={theme}>
        {theme.name === "light" ? (
          <LightModeIcon />
        ) : (
          <NightlightRoundIcon className="dark" />
        )}
      </IconButton>
    </HeaderSt>
  );
};

export default Header;
