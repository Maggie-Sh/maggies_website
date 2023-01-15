import { useContext } from "react";
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
import { RootState } from "../../store";
import { toggleMenu, hideMenu } from "../../features/isShowMenuSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { theme, toggleTheme } = useContext(
    ThemeContext
  ) as AppContextInterface;

  const dispatch = useDispatch();
  const isShowMenu = useSelector((state: RootState) => state.isShowMenu);

  const handleToggle = () => dispatch(toggleMenu());
  const handleHideMenu = () => dispatch(hideMenu());

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
          <CustomLink
            target="_blank"
            rel="noreferrer"
            to={require("../../assets/Margarit_Shakaryan_CV.pdf")}
          >
            cv
          </CustomLink>
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
