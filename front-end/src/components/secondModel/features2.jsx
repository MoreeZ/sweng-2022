/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Features extends Component {
    state = {}

    componentWillMount() {
        this.setState(this.props.modelState);
        console.log(this.props.modelState);
    }

    render() {
        return this.renderForm();
    }

    handleSubmit = (e) => {
        const numberOnlyRegex = /^[0-9]*\.?[0-9]*$/;
        const numbersOnlyString = "Numbers only allowed.";
        this.validateString("noOfBedrooms", numberOnlyRegex, numbersOnlyString);
        this.validateString("yearBuilt", numberOnlyRegex, numbersOnlyString);
        this.validateString("taxAmount", numberOnlyRegex, numbersOnlyString);
        this.validateString("noOfBathrooms", numberOnlyRegex, numbersOnlyString);
        this.validateString("area", numberOnlyRegex, numbersOnlyString);
        this.validateString("house_price", numberOnlyRegex, numbersOnlyString);
        this.validateString("structuretaxvaluedollarcnt", numberOnlyRegex, numbersOnlyString);
        this.validateString("calculatedfinishedsquarefeet", numberOnlyRegex, numbersOnlyString);

        setTimeout(()=>{ // temporary solution
            if (this.state.errorQuantity === 0) {
              this.props.handlePredict(this.state); // BUG HERE
            }
          }, 300)
    }

    // Function takes in the property, a regular expression and error message
    validateString = (property, rgx, errorMsg) => {
        // if error
        if (!this.state[property].match(rgx)) {
            // and error not yet recorder
            if (!this.state.errors[property].find(msg => msg === errorMsg)) {
                // record error
                this.setState({
                    errors: {
                        ...this.state.errors,
                        [property]: [errorMsg, ...this.state.errors[property]]
                    },
                    errorQuantity: this.state.errorQuantity + 1
                })
            }
            // if no error
        } else {
            // and error was recorded
            if (this.state.errors[property].find(msg => msg === errorMsg)) {
                // remove error
                this.setState({
                    errors: {
                        ...this.state.errors,
                        [property]: this.state.errors[property].filter(msg => msg !== errorMsg)
                    },
                    errorQuantity: this.state.errorQuantity - 1
                })

            }
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    renderForm() {
        const submitClass = "form-control rounded-pill bg-dark";
        const submitStyle = { color: "white" };

        return (
            <>
                <div className="row m-4">
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>No. of Bedrooms</label>
                        <input
                            name="noOfBedrooms"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.noOfBedrooms.length > 0 ? " error-border" : "")}
                            placeholder="No. of bedrooms"
                            aria-label="No. of bedrooms"
                            onChange={this.handleChange}
                            value={this.state.noOfBedrooms}
                        />
                        {this.state.errors.noOfBedrooms.length > 0 ? (
                            this.state.errors.noOfBedrooms.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>No. of Bathrooms</label>
                        <input
                            name="noOfBathrooms"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.noOfBathrooms.length > 0 ? " error-border" : "")}
                            placeholder="No. of bathrooms"
                            aria-label="No. of bathrooms"
                            onChange={this.handleChange}
                            value={this.state.noOfBathrooms}
                        />
                        {this.state.errors.noOfBathrooms.length > 0 ? (
                            this.state.errors.noOfBathrooms.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Tax Amount ($)</label>
                        <input
                            name="taxAmount"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.taxAmount.length > 0 ? " error-border" : "")}
                            placeholder="Tax Amount"
                            aria-label="Tax Amount"
                            onChange={this.handleChange}
                            value={this.state.taxAmount}
                        />
                        {this.state.errors.taxAmount.length > 0 ? (
                            this.state.errors.taxAmount.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Year built</label>
                        <input
                            name="yearBuilt"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.yearBuilt.length > 0 ? " error-border" : "")}
                            placeholder="Year Built"
                            aria-label="Year Built"
                            onChange={this.handleChange}
                            value={this.state.yearBuilt}
                        />
                        {this.state.errors.yearBuilt.length > 0 ? (
                            this.state.errors.yearBuilt.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                </div>
                <div className="row m-4">
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Gross Living Area</label>
                        <input
                            name="area"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.area.length > 0 ? " error-border" : "")}
                            placeholder="Area"
                            aria-label="Area"
                            onChange={this.handleChange}
                            value={this.state.area}
                        />
                        {this.state.errors.area.length > 0 ? (
                            this.state.errors.area.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Actual house price</label>
                        <input
                            name="house_price"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.house_price.length > 0 ? " error-border" : "")}
                            placeholder="Actual house price"
                            aria-label="house_price"
                            onChange={this.handleChange}
                            value={this.state.house_price}
                        />
                        {this.state.errors.house_price.length > 0 ? (
                            this.state.errors.house_price.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Structure assessment value ($)</label>
                        <input
                            name="structuretaxvaluedollarcnt"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.structuretaxvaluedollarcnt.length > 0 ? " error-border" : "")}
                            placeholder="Rent Tax Amount"
                            aria-label="structuretaxvaluedollarcnt"
                            onChange={this.handleChange}
                            value={this.state.structuretaxvaluedollarcnt}
                        />
                        {this.state.errors.structuretaxvaluedollarcnt.length > 0 ? (
                            this.state.errors.structuretaxvaluedollarcnt.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>
                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}>Gross Building Area</label>
                        <input
                            name="calculatedfinishedsquarefeet"
                            type="text"
                            className={"form-control rounded-pill" + (this.state.errors.calculatedfinishedsquarefeet.length > 0 ? " error-border" : "")}
                            placeholder="finished area"
                            aria-label="calculatedfinishedsquarefeet"
                            onChange={this.handleChange}
                            value={this.state.calculatedfinishedsquarefeet}
                        />
                        {this.state.errors.calculatedfinishedsquarefeet.length > 0 ? (
                            this.state.errors.calculatedfinishedsquarefeet.map((msg, i) => (
                                <div key={i} className="error-msg">{msg}</div>
                            ))) : null}
                    </div>

                    <div className="col">
                        <label style={{ opacity: 0.7, marginLeft: 15 }}> </label>
                        <button
                            type="submit"
                            style={submitStyle}
                            className={submitClass}
                            aria-label="Predict"
                            onClick={this.handleSubmit}
                        >
                            Predict
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default Features;
