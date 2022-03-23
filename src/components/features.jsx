/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Features extends Component {
  state = {
    yearBuilt: 1969,
    taxAmount: 4542.86,
    noOfBathrooms: 2,
    noOfBedrooms: 3,
    area: 1476,
  };


  centreContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  render() {
    return this.renderForm();
  }

  predict(props) {
    props.sendState(this.state);
  }

  getInputValue = (event) => {
    // show the user input value to console
    const userValue = parseFloat(event.target.value);
    const name = event.target.name;

    if (name === "tax") this.setState({ taxAmount: userValue });
    else if (name === "nomBed") this.setState({ noOfBedrooms: userValue });
    else if (name === "nomBath") this.setState({ noOfBathrooms: userValue });
    else if (name === "area") this.setState({ area: userValue });
    else if (name === "year") this.setState({ yearBuilt: userValue });
  };

  renderForm() {
    const inputClass = "form-control rounded-pill";
    const submitClass = "form-control rounded-pill bg-primary";
    const submitStyle = { color: "white" };

    return (
      <div className="row m-4">
        <div className="col">
          <input
            name="nomBed"
            type="text"
            className={inputClass}
            placeholder="Number Of Bedrooms"
            aria-label="Number Of Bedrooms"
            onChange={this.getInputValue}
          />
        </div>
        <div className="col">
          <input
            name="nomBath"
            type="text"
            className={inputClass}
            placeholder="Number Of Bathrooms"
            aria-label="Number Of Bathrooms"
            onChange={this.getInputValue}
          />
        </div>
        <div className="col">
          <input
            name="tax"
            type="text"
            className={inputClass}
            placeholder="Tax Amount"
            aria-label="Tax Amount"
            onChange={this.getInputValue}
          />
        </div>
        <div className="col">
          <input
            name="year"
            type="text"
            className={inputClass}
            placeholder="Year Built"
            aria-label="Year Built"
            onChange={this.getInputValue}
          />
        </div>
        <div className="col">
          <input
            name="area"
            type="text"
            className={inputClass}
            placeholder="Area"
            aria-label="Area"
            onChange={this.getInputValue}
          />
        </div>
        <div className="col">
          <button
            type="submit"
            style={submitStyle}
            className={submitClass}
            aria-label="Predict"
            onClick={() => this.predict(this.props)}
          >
            Predict
          </button>
        </div>
      </div>
    );
  }
}

export default Features;
