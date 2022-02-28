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
        {this.renderForm()}
      </React.Fragment>
    );
  }

  renderForm() {
    const margin = "m-4";

    return (
      <form>
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
        <input type="submit" value="Predict" className={margin} />
      </form>
    );
  }
}

export default Features;
