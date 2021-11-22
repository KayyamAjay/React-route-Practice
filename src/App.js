import { Route } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Brawl from "./Pages/Brawl";
import MainHeader from "./components/MainHeader";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/Welcome">
          <Welcome />
        </Route>
        <Route path="/Brawl">
          <Brawl />
        </Route>
      </main>
    </div> //path is special props to specific the path of the url
  );
}

export default App;
