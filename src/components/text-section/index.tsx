import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Section } from "./styled";

const Text = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  return (
    <Section theme={theme}>
      <p>
        &nbsp;I am a software developer who wants to{" "}
        <span className="bold">create</span> applications which can{" "}
        <span className="bold">solve</span> real problems, not just sell things
        but <span className="bold">give emotions</span>, not just entertain but{" "}
        <span className="bold">teach</span>,{" "}
        <span className="bold">inspire</span> and{" "}
        <span className="bold">motivate</span>.
      </p>
    </Section>
  );
};

export default Text;
