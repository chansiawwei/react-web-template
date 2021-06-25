import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import LandingPage from "./pages/landing/landing.component";
import { Switch, Route, Redirect } from "react-router-dom";
import Auth from "./pages/auth/auth.component";
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/auth" component={Auth} />
        <Route path="/landing" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
