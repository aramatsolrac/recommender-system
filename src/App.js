import "./App.scss";
import { Route, Switch } from "react-router-dom";
import RecommenderPage from "./pages/RecommenderPage";

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" exact component={RecommenderPage} />
      </Switch>
    </div>
  );
}

export default App;
