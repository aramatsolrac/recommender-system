import "./RecommenderPage.scss";
import { Component } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
const PORT = "8080";
const apiURL = `http://localhost:${PORT}`;

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
    this.fetchData = this.fetchData.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }
  fetchData() {
    let call = "";

    if (this.state.question === 1) {
      call = "first";
    } else if (this.state.question === 2) {
      call = "second";
    } else if (this.state.question === 3) {
      call = "third";
    } else if (this.state.question === 4) {
      call = "fourth";
    } else if (this.state.question === 5) {
      call = "fifth";
    } else if (this.state.question === 6) {
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
    this.props.history.push("/");
  };

  handleNext = (e) => {
    e.preventDefault();
    console.log(e);
    this.setState({
      // [`Q${this.state.question}`]: e.option.name,
      question: (this.state.question += 1),
    });
    console.log(this.state.Q1);
    console.log(this.state.question);
    setTimeout(this.fetchData, 2000);
    // this.fetchData();
  };
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
    this.setState({
      question: this.tate.question - 1,
    });
    console.log(this.state.question);
    this.fetchData();
  }

  render() {
    return (
      <>
        <Header handleBack={this.handleBack} handleSkip={this.handleSkip} />
        <form className="app-form" onSubmit={this.handleNext}>
          <label className="app-form__question">
            {this.state.questionTitle}
            <select className="app-form__responses" defaultValue="select">
              <option
                className="app-form__responses--select"
                name="select"
                disabled=""
              >
                Select
              </option>
              {this.state.options &&
                this.state.options.map((option, index) => {
                  return (
                    <option
                      className="app-form__responses--select"
                      name={option}
                      value={option}
                      key={index}
                    >
                      {option}
                    </option>
                  );
                })}
            </select>
          </label>
          <div className="footer">
            <h2 className="app-form__name">shopify</h2>
            <Button
              children="Next"
              className="app-form__button"
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
