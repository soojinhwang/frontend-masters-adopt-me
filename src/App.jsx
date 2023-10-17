import { createRoot } from "react-dom";
import Pet from "./Pet";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <Pet name="Luna" animal="Cat" breed="Tuxedo" />
    <Pet name="Ruby" animal="Dog" breed="Shiba Inu" />
    <Pet name="Ginger" animal="Rabbit" breed="Dutch" />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
