import React from "react";
import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Cat",
      breed: "Tuxedo",
    }),
    React.createElement(Pet, {
      name: "Ruby",
      animal: "Dog",
      breed: "Shiba Inu",
    }),
    React.createElement(Pet, {
      name: "Ginger",
      animal: "Rabbit",
      breed: "Dutch",
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
