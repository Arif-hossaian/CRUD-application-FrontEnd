import { NavBar, AllUsers, AddUsers, Home, NotFound } from "./components";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact from="/" render={(props) => <Home {...props} />} />
        <Route exact path="/all" render={(props) => <AllUsers {...props} />} />
        <Route exact path="/add" render={(props) => <AddUsers {...props} />} />
        <Route exact component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
