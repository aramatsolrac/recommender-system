import "./App.scss";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header.js";
import RecommenderPage from "./pages/RecommenderPage";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path="/" exact component={RecommenderPage} />
      </Switch>
    </div>
  );
}

export default App;
