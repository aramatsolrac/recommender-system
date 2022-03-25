import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={""} />
        <Route path="/" component={""} />
      </Switch>
    </div>
  );
}

export default App;
