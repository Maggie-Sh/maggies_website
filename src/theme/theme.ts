export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  background: string;
  secondary_background: string;
}

export const light: Theme = {
  name: "light",
  primary: "#404040",
  secondary: "#a39193",
  background: "#f4ece6",
  secondary_background: "#f9f5f3",
};

export const dark: Theme = {
  name: "dark",
  primary: "#f4ece6",
  secondary: "#eea990",
  background: "#404040",
  secondary_background: "#5a5a5a",
};

// primary: "#66545e",
// secondary: "#eea990",
// background: "#f6e0b5",
