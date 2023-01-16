import { useContext } from "react";
import { ThemeContext } from "../../App";
import { AppContextInterface } from "../../App";
import { Container, Item } from "./styled";
import { data } from "./data";

const Contacts = () => {
  const { theme } = useContext(ThemeContext) as AppContextInterface;
  return (
    <Container>
      <div className="wrapper">
        {data.map((contact) => (
          <Item key={contact.name} theme={theme}>
            <span className="name">{contact.name}</span>
            <a
              href={
                contact.type === "link"
                  ? contact.value
                  : `mailto:${contact.value}`
              }
              target="_blank"
              rel="noreferrer"
            >
              {contact.value}
            </a>
          </Item>
        ))}
      </div>
    </Container>
  );
};

export default Contacts;
