import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Message, BtnLink } from "./styled";

const NotFound = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  return (
    <>
      <Message theme={theme}>Page's not found</Message>
      <BtnLink to="/" theme={theme}>
        go home
      </BtnLink>
    </>
  );
};

export default NotFound;
