import { Route, Switch } from "react-router-dom";
import Welcome from "./Pages/Welcome";
import Brawl from "./Pages/Brawl";
import MainHeader from "./components/MainHeader";
import BrawlDetails from "./Pages/Brawldetials";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/brawl" exact>
            <Brawl />
          </Route>
          <Route path="/brawl/:brawlid">
            <BrawlDetails />
          </Route>
          ]
        </Switch>
      </main>
    </div> //path is special props to specific the path of the url
  );
}

export default App;
