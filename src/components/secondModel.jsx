/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";
import Features from './features.jsx'

class SecondModel extends Component {
  state = {
    yearBuilt: "1969",
    taxAmount: "4542.86",
    noOfBathrooms: "2",
    noOfBedrooms: "3",
    area: "1476",
    errors: {
      yearBuilt: [],
      taxAmount: [],
      noOfBathrooms: [],
      noOfBedrooms: [],
      area: []    
    },
    errorQuantity: 0
  };

  handlePredict = () => {
    // this is there the api data is fetched via axios
  }

  render() {
    return (
      <>
      <Features modelState={this.state} handlePredict={this.handlePredict}/>
      {/* This is where the api data is presented */}
      </>
    )
  }
}

export default SecondModel;
