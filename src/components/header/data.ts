interface Link {
  name: string;
  path: string;
}

type Links = Link[];

export const links: Links = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "skills", path: "/skills" },
  { name: "experience", path: "/experience" },
  { name: "contacts", path: "/contacts" },
];
