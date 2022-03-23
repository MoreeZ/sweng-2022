import React, { Component } from "react";
import Features from "./features";
import BarChart from "./graph";

class Home extends Component {
  state = {
    yearBuilt: 1969,
    taxAmount: 4542.86,
    noOfBathrooms: 2,
    noOfBedrooms: 3,
    area: 1476,
  };

  render() {
    return (
      <>
        <Features sendState={(state) => this.setState(state)} />
        <BarChart state={this.state} />
      </>
    );
  }
}

export default Home;
