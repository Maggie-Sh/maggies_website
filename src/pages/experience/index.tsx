import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import experience from "../../data/experience.json";
import { Data } from "./types";
import {
  ListContainer,
  Heading,
  List,
  ListItem,
} from "../../shared/list/list.styled";

const Experience = () => {
  const data: Data = experience;
  console.log(data);
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  return (
    <>
      {data.map((job, i) => (
        <ListContainer
          className={i !== 0 ? "mt" : ""}
          theme={theme}
          key={job.id}
        >
          <Heading className="flex">
            {job.position}
            <span>{job.period}</span>
          </Heading>
          <List>
            {job.responsibilities.map((res) => (
              <ListItem key={res.id}>{res.responsibility}</ListItem>
            ))}
          </List>
        </ListContainer>
      ))}
    </>
  );
};

export default Experience;
