import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Text } from "./styled";
import { Data } from "./types";
import about from "../../data/about.json";
import {
  Heading,
  List,
  ListItem,
  ListContainer,
} from "../../shared/list/list.styled";

const About = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  const data: Data = about;
  return (
    <>
      <Text theme={theme}>{data.text}</Text>
      <ListContainer className="large" theme={theme}>
        <Heading>education</Heading>
        <List>
          {data.education.map((item) => (
            <ListItem key={item.id} className="flex">
              <span className="bold">{item.org_name}</span>
              <span className="bold">{item.period}</span>
              <span className="fullwidth">{item.subject}</span>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  );
};

export default About;
