import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Main } from "../../shared/styled";
import Slider from "../../components/home-slider";
import Text from "../../components/text-section";

const Home = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;

  return (
    <Main theme={theme}>
      <Slider />
      <Text />
    </Main>
  );
};

export default Home;
