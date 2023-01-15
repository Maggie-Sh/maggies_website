import React from "react";
import { data } from "../../pages/contacts/data";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Footer as StyledFooter, Links, IconLink } from "./styled";
import { SvgIcon } from "@mui/material";

const Footer = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  return (
    <StyledFooter theme={theme}>
      <Links>
        {data.slice(1).map((link) => (
          <IconLink
            key={link.name}
            href={link.value}
            target="_blank"
            theme={theme}
            title={link.name}
          >
            <SvgIcon>{link.icon}</SvgIcon>
          </IconLink>
        ))}
      </Links>
    </StyledFooter>
  );
};

export default Footer;
