import React from 'react';
import axios from 'axios';
import './form.scss';

class Form extends React.Component {
state = {
    question1:

}

render() {
    return (
        <>
            <form className= "app-form">
            <label className="app-form__question" value="this.state.question"> </label>
            <select className="app-form__responses" value='${this.state.response}'> </select>
            <option className="app-form__responses--select" value="select" disabled="" > Please select</option>
            <option className="app-form__responses-answer" value="this.state.response[0]">{this.state.response[0]}</option>
            </form>
        </>
    )
}
}