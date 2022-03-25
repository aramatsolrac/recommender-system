import "./RecommenderPage.scss";
import { Component } from "react";
import "../components/Form/Form.scss";
import axios from "axios";

// import axios from "axios";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
const PORT = "8080";
const apiURL = `http://localhost:${PORT}`;

// const baseURL = process.env.REACT_APP_API_URL;

class RecommenderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1,
      questionTitle: "",
      options: null,
      Q1: "",
      Q2: "",
      Q3: "",
      Q4: "",
      Q5: "",
      Q6: "",
    };
  }
  fetchData() {
    let call = "";

    if (this.state.question === 1) {
      call = "first";
    } else if (this.question === 2) {
      call = "second";
    } else if (this.question === 3) {
      call = "third";
    } else if (this.question === 4) {
      call = "fourth";
    } else if (this.question === 5) {
      call = "fifth";
    } else if (this.question === 6) {
      call = "sixth";
    }

    axios.get(`${apiURL}/${call}`).then((response) => {
      this.setState({
        questionTitle: response.data.question,
        options: response.data.options,
      });
    });
  }
  componentDidMount() {
    // change tittle of webpage
    document.title = "Onboarding form";
    this.fetchData();
  }

  handleSkip = () => {
    this.props.history.push("/"); // push to the  'https://stornename.myshopify.com/admin'
  };

  handleNext(e) {
    e.preventDefault();
    this.setState({
      [`Q${this.state.question}`]: e.option.name,
      question: this.prevState.question + 1,
    });
    console.log(this.state.Q1);
    console.log(this.state.question);
    this.fetchData();
  }
  handleSubmit(e) {
    console.log(e);
    const answers = {
      businessType: this.state.Q1,
      Q2: this.state.Q2,
      Q3: this.state.Q3,
      Q4: this.state.Q4,
      Q5: this.state.Q5,
      budget: this.state.Q6,
    };
    console.log(answers);
    axios
      .post(`${apiURL}/API`, answers)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  handleBack() {
    // this.setState({
    //   question: prevState.question - 1,
    // });
    console.log(this.state.question);
    this.fetchData();
  }

  render() {
    return (
      <>
        <Header handleBack={this.handleBack} handleSkip={this.handleSkip} />
        <form className="app-form">
          <label className="app-form__question">
            {this.state.questionTitle}
            <select
              className="app-form__responses"
              defaultValue="select"
            ></select>
            <option
              className="app-form__responses--select"
              name="select"
              disabled=""
            >
              Please select
            </option>
            {this.state.options &&
              this.state.options.map((option, index) => {
                return (
                  <option
                    className="app-form__responses--select"
                    name={option}
                    key={index}
                  >
                    {option}
                  </option>
                );
              })}
          </label>
          <div className="footer">
            <h2 className="footer__name">shopify</h2>
            <Button
              children="Next"
              className="footer__button"
              type="button"
              onClick={this.handleNext}
            />
          </div>
        </form>
      </>
    );
  }
}
export default RecommenderPage;
