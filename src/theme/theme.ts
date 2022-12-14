export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  background: string;
}

export const light: Theme = {
  name: "light",
  primary: "#66545e",
  secondary: "#eea990",
  background: "#f6e0b5",
};

export const dark: Theme = {
  name: "dark",
  primary: "#f6e0b5",
  secondary: "#aa6f73",
  background: "#66545e",
};
