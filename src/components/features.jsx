/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Features extends Component {
  state = {
    count: 0,
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
    return (
      <React.Fragment className="bg-primary">
        {this.renderHeader()}
        {this.renderInputs()}
        <h2 style={this.centreContent}>Graph to be implemented</h2>
        <p style={this.centreContent}>
          Note: Graph will automatically adjust to each input
        </p>
      </React.Fragment>
    );
  }

  renderHeader() {
    return (
      <div
        style={{
          fontSize: 40,
          ...this.centreContent,
        }}
        className="bg-primary text-white"
      >
        House Price Predictor
      </div>
    );
  }

  renderInputs() {
    const margin = "m-5";

    return (
      <React.Fragment>
        <input
          type="text"
          placeholder="Tax Amount"
          name="tax"
          className={margin}
        />
        <input
          type="text"
          placeholder="Number of Bathrooms"
          name="bathrooms"
          className={margin}
        />
        <input
          type="text"
          placeholder="Number of Bedrooms"
          name="bedrooms"
          className={margin}
        />
        <input
          type="text"
          placeholder="Year Built"
          name="year"
          className={margin}
        />
        <input type="text" placeholder="Area" name="area" className={margin} />
      </React.Fragment>
    );
  }
}

export default Features;
