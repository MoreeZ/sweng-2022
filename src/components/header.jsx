/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Header extends Component {
  centreContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  render() {
    return (
      <React.Fragment className="bg-primary">
        {this.renderHeader()}
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
}

export default Header;
