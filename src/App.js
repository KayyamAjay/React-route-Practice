import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Brawl from "./Pages/Brawl";
function App() {
  return (
    <div>
      <Route path="/Welcome">
        <Welcome />
      </Route>
      <Route path="/Brawl">
        <Brawl />
      </Route>
    </div>
  );
}

export default App;
