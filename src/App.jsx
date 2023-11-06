import { createRoot } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>;
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
