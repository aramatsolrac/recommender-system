import "./RecommenderPage.scss";
import { Component } from "react";
// import axios from "axios";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

// const baseURL = process.env.REACT_APP_API_URL;

class RecommenderPage extends Component {
  handleBack = () => {
    this.props.history.goBack(); // go to previous page
  };

  handleSkip = () => {
    this.props.history.push("/"); // push to the  'https://stornename.myshopify.com/admin'
  };

  handleNext = () => {
    // go to the next question
  };

  render() {
    return (
      <>
        <Header handleBack={this.handleBack} handleSkip={this.handleSkip} />
        <Footer handleNext={this.handleNext} />
      </>
    );
  }
}
export default RecommenderPage;
