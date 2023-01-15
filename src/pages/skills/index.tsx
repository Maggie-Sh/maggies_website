import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import {
  Heading,
  List,
  ListItem,
  ListContainer,
} from "../../shared/list/list.styled";
import { Data } from "./types";
import skills from "../../data/skills.json";

const Skills = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  const { professional_skills, soft_skills }: Data = skills;
  return (
    <>
      <ListContainer theme={theme}>
        <Heading>professional skills</Heading>
        <List>
          {professional_skills.map((skill) => (
            <ListItem key={skill.id} theme={theme}>
              {skill.skill_highlighted && (
                <span className="bold coloured">{skill.skill_highlighted}</span>
              )}
              {skill?.skill}
            </ListItem>
          ))}
        </List>
      </ListContainer>
      <ListContainer className="mt" theme={theme}>
        <Heading>soft skills</Heading>
        <List>
          {soft_skills.map((skill) => (
            <ListItem key={skill.id}>
              <p>{skill?.skill}</p>
            </ListItem>
          ))}
        </List>
      </ListContainer>
    </>
  );
};

export default Skills;
