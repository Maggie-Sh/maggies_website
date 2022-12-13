import React, { useContext } from "react";
import { ThemeContext } from "../../App";

const Home = () => {
  const theme = useContext(ThemeContext);

  return <div>Home</div>;
};

export default Home;
