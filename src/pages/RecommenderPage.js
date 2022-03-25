import "./RecommenderPage.scss";
import { Component } from "react";
// import axios from "axios";
import Button from "../components/Button/Button";

// const baseURL = process.env.REACT_APP_API_URL;

class RecommenderPage extends Component {
  render() {
    return (
      <Button
        children="Next"
        className=""
        type="button"
        onClick={this.handleSubmit}
      />
    );
  }
}
export default RecommenderPage;
